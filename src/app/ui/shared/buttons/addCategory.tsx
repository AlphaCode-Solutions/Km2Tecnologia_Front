'use client'

import { Box, Checkbox, Fab, FormControl, FormControlLabel, Input, InputLabel } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

export default function AddCategory() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    const [categoryName, setCategoryName] = useState<string>('');
    const [addCategory, setAddCategory] = useState<boolean>(false);


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexWrap: 'wrap',
                '& > :not(style)': { m: 1 }
            }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={() => { handleOpen(); }} />
            </Fab>
            {open &&
                <>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="categoryName">Nombre de la categoria</InputLabel>
                        <Input
                            type="text"
                            id="categoryName"
                            name="categoryName"
                            value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox name="addCategory" value="true"
                            defaultChecked={addCategory}
                            onChange={(e) => setAddCategory(e.target.checked)} />}
                        label="Agregar a las categorias existentes"
                        sx={{ flexBasis: '100%', width: '100%', mt: 1 }}
                    />
                </>
            }
        </Box>
    )
}