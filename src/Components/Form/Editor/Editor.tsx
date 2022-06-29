import React, { useEffect, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import "./styling/Editor.css"
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { StyledEditor } from './Editor.styled';
import { ControllerRenderProps } from 'react-hook-form';
import { BlogFormValues } from '../MainForm/MainForm';

export interface EditorControlProps {
    field: ControllerRenderProps<BlogFormValues, "content">
}


export const EditorControl: React.FC<EditorControlProps> = ( { field } ) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    // Bind onChange to setEditorState
    useEffect(() => {
        field.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
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
