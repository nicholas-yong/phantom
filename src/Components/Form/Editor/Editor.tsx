import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styling/Editor.css"
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { StyledEditor } from './Editor.styled';

export interface EditorControlProps {
    onChange: any
    value: any
}

export const EditorControl: React.FC<EditorControlProps> = ( { onChange, value} ) => {

    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty() )

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
