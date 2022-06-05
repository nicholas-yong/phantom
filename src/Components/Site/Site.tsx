import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { MainForm } from '../Form/MainForm/MainForm';

interface SiteProps {
}

export const Site: React.FC<SiteProps> = () => 
{
    return (
        <>
            <Flex backgroundColor={"lightblue"} align = "center" justifyContent={"center"} w={"100vw"} h={"100vh"}>
                <MainForm/>
            </Flex>
        </>
    )
}
