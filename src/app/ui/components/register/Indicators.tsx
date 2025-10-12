'use client'

import { DialogContent, FormControl, InputLabel, TextField, Box } from "@mui/material";
import { AmountInput } from "../../shared/inputs/AmountInput";
import { indicatorsCategories } from "@/app/lib/constant/categories";
import AddCategory from "../../shared/buttons/addCategory";
import { useState } from "react";
import styles from './Income.module.css';
import { GeneralButton } from "../../shared/buttons/generalButton";
import SelectDate from "../../shared/buttons/selectDate";

export default function Indicators( ) {
    const [category, setCategory] = useState<any>(null);
    const [date, setDate] = useState<any>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const amount = String(formData.get('amount') ?? '');
        const currency = String(formData.get('currency') ?? '');
        
    }


    return (
        <div>
            <DialogContent>
                <form onSubmit={handleSubmit} id="indicatorsForm">
                    <FormControl fullWidth
                        sx={{
                            m: 1,
                            gap: 1
                        }}>
                        <InputLabel htmlFor="amount">Monto</InputLabel>
                        <AmountInput />
                    </FormControl>
                    <h1>Categoria*</h1>
                    <Box className={styles.chips}>
                        {indicatorsCategories.map(item => {
                            const selected = category === item.name;
                            return (
                                <GeneralButton
                                    key={item.id}
                                    variant={selected ? 'contained' : 'outlined'}
                                    onClick={() => setCategory(selected ? null : item.name)}
                                    selected={selected}
                                    disabled={false}
                                    movement="indicators"
                                >
                                    {item.name}
                                </GeneralButton>
                            );
                        })}
                    </Box>
                    <AddCategory movement="indicators" />
                    <TextField
                        id="description"
                        name="description"
                        label="Descripción de ingreso"
                        fullWidth
                    />
                    Fecha
                    <SelectDate movement="indicators" date={date} setDate={setDate} />
                </form>
            </DialogContent>

        </div>
    )
}