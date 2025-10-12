'use client'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Income from "./Income";
import Bills from "./Bills";
import Costs from "./Costs";
import Indicators from "./Indicators";

export default function NewMovement({ open, handleClose }: { open: boolean, handleClose: () => void, handleNewMovement: () => void }) {
    const [registerType, setRegisterType] = useState("Ingresos");
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
                        onClick={() => setRegisterType("Ingresos")}
                    >
                        Ingresos
                    </Button>
                    <Button variant="outlined"
                        onClick={() => setRegisterType("Gastos")}
                    >
                        Gastos
                    </Button>
                    {/* <Button variant="outlined"
                        onClick={() => setRegisterType("Costos")}
                    >
                        Costos
                    </Button> */}
                    <Button variant="outlined"
                        onClick={() => setRegisterType("Indicadores")}
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