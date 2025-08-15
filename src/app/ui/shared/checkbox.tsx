import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxLabelProps {
    label?: string;
    required?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxLabel({ label, required, disabled, checked, onChange }: CheckboxLabelProps) {
    const checkbox = (
        <Checkbox
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            size="small"
        />
    )

    if(label) {
        return (
            <FormControlLabel
                control={checkbox}
                label={label}
                required={required}
                disabled={disabled}
                sx={{
                    '& .MuiFormControlLabel-label': {
                        fontSize: '14px',
                    },
                }}
            />
        )
    }   

    return checkbox;
}