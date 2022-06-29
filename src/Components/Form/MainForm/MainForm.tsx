import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { BaseSyntheticEvent, useEffect } from 'react';
import { EditorState } from 'react-draft-wysiwyg';
import { Controller, useForm, Field} from "react-hook-form"
import { EditorControl } from '../Editor/Editor';
import { FileUpload } from '../FileInput/FileInput';
import { TagControl } from '../TagControl/TagControl';
import { StyledForm } from './MainForm.styled';

export interface BlogFormValues
{
    title: string
    mainPicture: string
    content: string
    teaser: string
    tags: Array<string>
}



export const MainForm = () => {

    const { control, handleSubmit } = useForm<BlogFormValues>({
        defaultValues: {
            title: '',
            mainPicture: '',
            content: '',
            teaser: '',
            tags: [],
        }
    })

    const formSubmit = (data: BlogFormValues, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault()
        
        // We need to build a DTO, probably using the blog value types
        


    }


    return (
    <Flex backgroundColor={"#FFFFFF"} h='fit-content' w='50%'>
        <StyledForm onSubmit={handleSubmit(formSubmit, () => {})}>
            <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Controller
                name = {"title"}
                control = {control}
                render = {({ field }) => <Input {...field} />}
                />
                <FormHelperText>Title required</FormHelperText>
            </FormControl>
            <FileUpload
                name = {"mainPicture"}
                placeholder = {"Blog Post Picture"}
                acceptedFileTypes = {"image/*"}
                control = {control}
                children = {<span>Upload the main picture here</span>}
            />
             <Controller
                render = {({ field }) => <EditorControl field = {field} />}
                name = "content"
                control = {control} />
            <FormControl isRequired>
                <FormLabel>Teaser</FormLabel>
                <Controller
                name={"teaser"}
                control={control}
                render = {({ field }) => <Input {...field}/>}
                />
            </FormControl>
            <Controller
            render={({field}) => <TagControl field = {field} />}
            name='tags'
            control={control}/>
            <FormControl>
                <FormLabel>Submit Blog Post</FormLabel>
                <Input type= "submit" value = "Submit" />
            </FormControl>
        </StyledForm>
    </Flex>
    )
}
