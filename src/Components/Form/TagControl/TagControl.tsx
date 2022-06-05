import { CloseIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Icon, Input, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { useRef, useState } from 'react';
import { StyledTagWrapItem } from './TagControl.styled';

interface TagControlProps {
    
}

export const TagControl: React.FC<TagControlProps> = () => {

    const [tags, setTags] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)



    function enterTag(event: React.KeyboardEvent<HTMLInputElement>)
    {   
        // Enter key
        if(event.key === 'Enter' && inputRef.current)
        {
            const inputVal = inputRef.current.value
            setTags((prev) => [...prev, inputVal])
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
            ref={inputRef}
            />
            <Wrap marginTop={'3'}>
                {tags.map((tag, index) => {
                    return (
                        <>
                            <StyledTagWrapItem key = {index} data-id = {index} onClick={(e) => removeTag(e)} >
                                <p>{tag}</p>
                                <CloseIcon w = {'1.5'} h = {'1.5'} color = {'black'} />
                            </StyledTagWrapItem>
                        </>
                    )
                })}
            </Wrap>

        </FormControl>
    )
}
