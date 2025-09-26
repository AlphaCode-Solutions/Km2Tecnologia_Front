import { Button } from "@mui/material";
import { clsx } from "clsx";
import styles from './generalButton.module.css';


export const GeneralButton = ({ children, onClick, variant, disabled, selected }) => {
    return (
        <Button
            key={children}
            type="button"
            variant={variant}
            className={clsx(styles.chipButton,

                { [styles.chipButtonSelected]: selected })}
            sx={{
                backgroundColor: 'transparent',
                color: selected ? 'success.main' : 'gray',
                border: '1px solid',
                borderColor: selected ? 'success.main' : 'gray',
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
