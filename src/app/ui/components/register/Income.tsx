'use client'

import { FormControl, InputLabel, DialogContent, MenuItem, Select, Button, Box, TextField } from "@mui/material";
import { AmountInput } from "../inputs/AmountInput";
import { incomeCategories } from "@/app/lib/constant/categories";
import AddCategory from "../buttons/addCategory";
import { useState } from "react";
import styles from './Income.module.css';
import { GeneralButton } from "../buttons/generalButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Income() {
    const [category, setCategory] = useState<any>(null);

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
                    <Box className={styles.datePicker}>
                        <GeneralButton onClick={() => {}} variant="outlined" disabled={false} selected={false}>Hoy</GeneralButton>
                        <GeneralButton onClick={() => {}} variant="outlined" disabled={false} selected={false}>Ayer</GeneralButton>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Fecha de ingreso" />
                            </DemoContainer>
                        </LocalizationProvider>                    </Box>
                </form>
            </DialogContent>

        </div>
    )
}