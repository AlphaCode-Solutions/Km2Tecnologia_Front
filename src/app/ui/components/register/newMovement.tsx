'use client'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Income from "./Income";
import Bills from "./Bills";
import Costs from "./Costs";
import Indicators from "./Indicators";
import { movementColor } from "@/app/lib/actions/movementColor";

export default function NewMovement({ open, handleClose }: { open: boolean, handleClose: () => void, handleNewMovement: () => void }) {
    const [registerType, setRegisterType] = useState("Ingresos");
    const [selectedMovement, setSelectedMovement] = useState("income");


    let content = null;
    switch (registerType) {
        case "Ingresos":
            content = <Income />;
            break;
        case "Gastos":
            content = <Bills />;
            break;
        // case "Costos":
        //     content = <Costs />;
        //     break;
        case "Indicadores":
            content = <Indicators />;
            break;
    }

    const formIdByType = {
        Ingresos: 'incomeForm',
        Gastos: 'billsForm',
        Costos: 'costsForm',
        Indicadores: 'indicatorsForm',
    };

    const graySx = { color: 'text.disabled', borderColor: 'divider', '&:hover': { borderColor: 'divider' } };
    const selectedSx = (key: typeof selectedMovement) => {
        const c = movementColor(key);
        return { color: c, borderColor: c, '&:hover': { borderColor: c } };
    };

    return (
        <Box >
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Registro</DialogTitle>
                <DialogContentText>Tipo de registro</DialogContentText>
                <div
                    id="registerType"
                >
                    <Button
                        variant="outlined"
                        sx={selectedMovement === 'income' ? selectedSx('income') : graySx}
                        onClick={() => { setRegisterType("Ingresos"); setSelectedMovement("income"); }}
                    >
                        Ingresos
                    </Button>

                    <Button
                        variant="outlined"
                        sx={selectedMovement === 'bills' ? selectedSx('bills') : graySx}
                        onClick={() => { setRegisterType("Gastos"); setSelectedMovement("bills"); }}
                    >
                        Gastos
                    </Button>

                    {/* <Button variant="outlined"
                        onClick={() => { setRegisterType("Costos"); setSelectedMovement("costs"); }}
                    >
                        Costos
                    </Button> */}

                    <Button
                        variant="outlined"
                        sx={selectedMovement === 'indicators' ? selectedSx('indicators') : graySx}
                        onClick={() => { setRegisterType("Indicadores"); setSelectedMovement("indicators"); }}
                    >
                        Indicadores
                    </Button>
                </div>
                {
                    content
                }
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit" form={formIdByType[registerType as keyof typeof formIdByType]}>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}