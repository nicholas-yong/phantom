import React, { useEffect, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from 'html-to-draftjs'
import "./styling/Editor.css"
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { StyledEditor } from './Editor.styled';

export interface EditorControlProps {
    onChange: (val: EditorState) => void
    /* Contains the HTML block value that we will transform into DraftJS content */
    value: string
}

export const EditorControl: React.FC<EditorControlProps> = ( { onChange, value} ) => {

    // console.log(JSON.stringify(value))

    // const blocksFromHTML = htmlToDraft(value)

    // const { contentBlocks, entityMap } = blocksFromHTML
    // const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap)

    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    // Bind onChange to setEditorState
    useEffect(() => {
        onChange(editorState)
    }, [editorState])
    

    return (
        <>
        <FormControl isRequired>
            <FormLabel htmlFor="content">Content</FormLabel>
            <StyledEditor>
                <Editor
                    editorState={editorState} 
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange={(editorState) => {setEditorState(editorState)}}/>
            </StyledEditor>
            <FormErrorMessage>Content error</FormErrorMessage>
        </FormControl>
        </>
    )
}
