import { currency } from "@/app/lib/constant/currency"
import { InputAdornment, MenuItem, OutlinedInput, TextField } from "@mui/material"

export const AmountInput = () => {
    return (
        <OutlinedInput
            id="amount"
            name="amount"
            label="Monto"
            endAdornment={
                <InputAdornment position="end" sx={{ gap: 1, mr: -1 }}>
                    <TextField
                        id="currency"
                        select
                        defaultValue={currency[0].symbol}
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            minWidth: 72,
                            '& .MuiSelect-select': { py: 0, pr: '24px' }
                        }}
                        name="currency"
                    >
                        {currency.map(c => (
                            <MenuItem key={c.id} value={c.symbol}>
                                {c.symbol}
                            </MenuItem>
                        ))}
                    </TextField>
                </InputAdornment>
            }
            sx={{
                '& .MuiOutlinedInput-input': { pr: 10 }
            }}
        />
    )
}