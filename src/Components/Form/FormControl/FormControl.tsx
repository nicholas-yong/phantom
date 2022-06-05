import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import * as React from 'react';
import { Control, Controller } from 'react-hook-form';

export interface FormControlProps
{
    name: string
    label: string
    helperText: string
    control: Control<any, any>
    defaultValue?: string
    ActionElement: any
}

export const GenericFormControl: React.FC<FormControlProps> = ({ name, helperText, control, ActionElement, label}) => {
    return (
        <>
        <FormControl>
            <FormLabel>
                {label}
            </FormLabel>
            <Controller
                name = {name}
                control = {control}
                render = {({field}) => <ActionElement {...field} />}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </>
    )
}
