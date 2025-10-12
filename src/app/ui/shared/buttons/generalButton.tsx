import { Button } from "@mui/material";
import { clsx } from "clsx";
import styles from './generalButton.module.css';
import { movementColor } from "@/app/lib/actions/movementColor";


interface GeneralButtonProps {
    children: any;
    onClick: any;
    variant: any;
    disabled: any;
    selected: any;
}


export const GeneralButton = ({ movement, children, onClick, variant, disabled, selected }: GeneralButtonProps) => {

    return (
        <Button
            key={children}
            type="button"
            variant={variant}
            className={clsx(styles.chipButton,
                movementColor(movement),
                { [styles.chipButtonSelected]: selected })}
            sx={{
                backgroundColor: 'transparent',
                color: selected ? movementColor(movement) : 'gray',
                border: '1px solid',
                borderColor: selected ? movementColor(movement) : 'gray',
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
