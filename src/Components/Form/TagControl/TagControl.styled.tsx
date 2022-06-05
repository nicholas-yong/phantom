import { WrapItem } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const TagsContainer = styled('div')({
    display: 'flex',
    border: '1px solid black'
})

export const StyledTagWrapItem = styled(WrapItem)({
    padding: '5px 10px',
    backgroundColor: "#7AB2F7",
    borderRadius: '4px',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    gap: '3px',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#3F92F8'
    } 
})
