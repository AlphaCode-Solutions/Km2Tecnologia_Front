"use client";

import CheckboxLabel from "@/app/ui/shared/checkbox";
import { Button, InputAdornment, InputLabel, OutlinedInput, TextField, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50 items-center justify-center">
            <div className="bg-white w-full flex items-center justify-center absolute top-0 left-0 p-4">
                <Image
                    src="/logo.png" 
                    alt="logo" 
                    width={100} 
                    height={100}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-xl bg-white p-8">
                <h1>Iniciar Sesión</h1>
                <p>¡Bienvenido de nuevo! Inicia sesión para acceder a tu cuenta</p>
                <form className="flex flex-col gap-4 border border-blue-200 rounded-lg p-10">
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        className="w-100" 
                    />
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CheckboxLabel
                                label="Recordar contraseña"
                            />
                        </div>
                        <Link href="/auth/forgot-password" className="text-sm hover:text-[#C14A00]">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <Button
                        variant="contained"
                        sx={{
                            width: '100%',
                            color: 'white'
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                </form>
                <div className="flex items-center justify-center">
                    <p className="text-sm">
                        ¿No tienes una cuenta? 
                        <Link href="/auth/register" className="text-[#C14A00]"> Regístrate</Link>
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Link
                        href="/auth/privacyPolicy"
                        className="text-sm text-gray-500 underline hover:text-[#C14A00]"
                    >
                        Política de privacidad
                    </Link>
                    y
                    <Link
                        href="/auth/termsAndConditions"
                        className="text-sm text-gray-500 underline hover:text-[#C14A00]"
                    >
                        Términos y condiciones
                    </Link>
                </div>
            </div>
        </div>
    );
}