import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { Controller, useForm, Field} from "react-hook-form"
import { EditorControl } from '../Editor/Editor';
import { FileUpload } from '../FileInput/FileInput';
import { TagControl } from '../TagControl/TagControl';
import { StyledForm } from './MainForm.styled';


export const MainForm = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: '',
            mainPicture: '',
            content: '',
            teaser: '',
            tags: ''
        }
    })

    return (
    <Flex backgroundColor={"#FFFFFF"} h='fit-content' w='50%'>
        <StyledForm onSubmit={() => handleSubmit}>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Controller
                name = "title"
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
                render = {({ field }) => <EditorControl {...field}/>}
                name = "content"
                control = {control} />
            <FormControl>
                <FormLabel>Teaser</FormLabel>
                <Controller
                name='teaser'
                control={control}
                render = {({ field }) => <Input {...field}/>}
                />
            </FormControl>
            <Controller
            render={({field}) => <TagControl {...field} />}
            name='tags'
            control={control}/>
            <FormControl>
                <FormLabel>Submit Blog Post</FormLabel>
                <Button size = 'sm'>Submit</Button>
            </FormControl>
        </StyledForm>
    </Flex>
    )
}
