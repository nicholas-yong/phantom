import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Code, Icon, ComponentWithAs, InputProps } from "@chakra-ui/react";
import { FiFile } from  "react-icons/fi"
import { Control, useController } from "react-hook-form";
import { useRef } from "react";

export interface FileUploadProps {
    name: string 
    placeholder: string 
    acceptedFileTypes: string
    control: Control<any, any>
    children: React.ReactChild
    isRequired?: boolean
}

export const FileUpload: React.FC<FileUploadProps> = ({ name, placeholder, acceptedFileTypes, control, children, isRequired=false }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: isRequired },
  });

    return (
        <FormControl isInvalid={invalid} isRequired>
          <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FiFile} />}
            />
            <input type='file' 
                accept={acceptedFileTypes} 
                ref = {inputRef}
                onChange = {(e) => onChange(e.target.files ? e.target.files[0]: undefined)} 
                {...inputProps} 
                style={{ display: 'none' }}/>
            <Input
              placeholder={placeholder || "Your file ..."}
              onClick={() => inputRef.current?.click()}
              defaultValue={value}
            />
          </InputGroup>
          <FormErrorMessage>
            {invalid}
          </FormErrorMessage>
        </FormControl>
      )
  

}
