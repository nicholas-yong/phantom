import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { BaseSyntheticEvent, useEffect } from 'react';
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

    const { register, control, handleSubmit } = useForm<BlogFormValues>({
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
        console.log(data)
    }


    return (
    <Flex backgroundColor={"#FFFFFF"} h='fit-content' w='50%'>
        <StyledForm onSubmit={() => handleSubmit(formSubmit)}>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Controller
                name = {"title"}
                control = {control}
                rules = {{
                    required: true
                }}
                render = {({ field }) => <Input {...field} />}
                />
                <FormHelperText>Title required</FormHelperText>
            </FormControl>
            <FileUpload
                name = {"mainPicture"}
                placeholder = {"Blog Post Picture"}
                acceptedFileTypes = {"image/*"}
                control = {control}
                isRequired = {true}
                children = {<span>Upload the main picture here</span>}
            />
             <Controller
                render = {({ field }) => <EditorControl {...field}/>}
                name = "content"
                control = {control} />
            <FormControl>
                <FormLabel>Teaser</FormLabel>
                <Controller
                name={"teaser"}
                control={control}
                rules = {{
                    required: true
                }}
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
