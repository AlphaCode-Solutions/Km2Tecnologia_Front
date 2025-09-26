'use client'

import { FormControl, InputLabel, DialogContent, Box, TextField } from "@mui/material";
import { AmountInput } from "../../shared/inputs/AmountInput";
import { incomeCategories } from "@/app/lib/constant/categories";
import AddCategory from "../../shared/buttons/addCategory";
import { useState } from "react";
import styles from './Income.module.css';
import { GeneralButton } from "../../shared/buttons/generalButton";
import SelectDate from "../../shared/buttons/selectDate";

export default function Income() {
    const [category, setCategory] = useState<any>(null);
    const [date, setDate] = useState<any>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const amount = String(formData.get('amount') ?? '');
        const currency = String(formData.get('currency') ?? '');

        const selectedCategoryId = category ?? null;
        const categoryName = selectedCategoryId ? null : String(formData.get('categoryName') ?? '').trim();
        const addCategory = selectedCategoryId ? false : String(formData.get('addCategory')) === 'true';

        const income = selectedCategoryId
            ? { amount, currency, categoryName: selectedCategoryId }
            : { amount, currency, categoryName, addCategory };

        console.log(income);
    };

    return (
        <div>
            <DialogContent>
                <form onSubmit={handleSubmit} id="incomeForm">
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
                        {incomeCategories.map(item => {
                            const selected = category === item.name;
                            return (
                                <GeneralButton
                                    key={item.id}
                                    variant={selected ? 'contained' : 'outlined'}
                                    onClick={() => setCategory(selected ? null : item.name)}
                                    selected={selected}
                                    disabled={false}
                                >
                                    {item.name}
                                </GeneralButton>
                            );
                        })}
                    </Box>
                    <AddCategory />
                    <TextField
                        id="description"
                        name="description"
                        label="Descripción de ingreso"
                        fullWidth
                    />
                    Fecha
                    <SelectDate date={date} setDate={setDate} />
                </form>
            </DialogContent>

        </div>
    )
}