import { CloseIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Icon, Input, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ControllerRenderProps, Field } from 'react-hook-form';
import { BlogFormValues } from '../MainForm/MainForm';
import { StyledTagWrapItem } from './TagControl.styled';

interface TagControlProps {
    field: ControllerRenderProps<BlogFormValues, "tags">
}

export const TagControl: React.FC<TagControlProps> = ({ field }) => {

    const [tags, setTags] = useState<string[]>(field.value)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        field.onChange(tags)
    }, [tags])



    function enterTag(event: React.KeyboardEvent<HTMLInputElement>)
    {   
        // Enter key
        if(event.key === 'Enter' && inputRef.current?.value)
        {
            const inputVal = inputRef.current.value
            setTags((prev) => [...prev, inputVal])
        }
    }

    function stopSubmissionOnEnter(event: React.KeyboardEvent<HTMLInputElement>){
        console.log(event.key)
        if(event.key === 'Enter')
        {
            event.preventDefault()
        }
    }

    const removeTag = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => 
    {
        const item = event.target as HTMLLIElement
        const tagKey = parseInt((item.getAttribute("data-id") || ''))
        setTags((prev) => prev.filter((key, index) => tagKey !== index))
    }

    return (
        <FormControl>
            <FormLabel>Enter new Tags:</FormLabel>
            <Input
            placeholder='Enter tags here...'
            onKeyUp={(e) => enterTag(e)}
            onKeyDown={(e) => stopSubmissionOnEnter(e)}
            ref={inputRef}
            />
            <Wrap marginTop={'3'}>
                {tags.map((tag, index) => {
                    return (
                        <React.Fragment key = {index}>
                            <StyledTagWrapItem key = {index} data-id = {index} onClick={(e) => removeTag(e)} >
                                <p>{tag}</p>
                                <CloseIcon w = {'1.5'} h = {'1.5'} color = {'black'} />
                            </StyledTagWrapItem>
                        </React.Fragment>
                    )
                })}
            </Wrap>

        </FormControl>
    )
}
