import {useId} from "react";
import {Input, InputContainer, InputMaskStyled, Label} from "./styles.js";

export function CustomInput({key, label, tipo, onChange, placeholder, size, mask, value, name, required} ) {
    const idInput = useId();

    const inputProps = {
        value: value,
        id: idInput,
        name: name,
        placeholder: placeholder,
        onChange: onChange,
        type: tipo ? tipo : "text",
        required: !!required,
        size: size,
    };

    if (mask) {
        inputProps.mask = mask
    }

    return (
        <InputContainer>
            <Label htmlFor={idInput}>
                {label}
            </Label>
            {mask ? (
                    <InputMaskStyled key={key} {...inputProps}></InputMaskStyled>
                ) : (
                    <Input key={key} {...inputProps}/>
                )
            }
        </InputContainer>
    );
}
