'use client'

import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import NewMovement from "../../components/register/newMovement";

export default function AddMovement() {
    const [open, setOpen] = useState(false);
    const handleAddMovement = () => {
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={() => { setOpen(true); }} />
            </Fab>
            <NewMovement
                open={open}
                handleClose={handleClose}
                handleNewMovement={handleAddMovement}
            />
        </Box>
    )
}