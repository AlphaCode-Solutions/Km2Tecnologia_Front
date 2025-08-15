"use client"

import Image from 'next/image';
import React from 'react';

interface FooterProps {
    className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-gray-900 text-white h-full w-full flex items-center justify-center ${className}`}>
            <div className="flex flex-col md:flex-row justify-between items-center w-full h-full mx-10">
                <Image
                    src="/logo.png"
                    alt="KM2 Tecnología"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                />
                <p className="text-gray-300 text-sm">
                    © {currentYear} KM2 Tecnología. Todos los derechos reservados.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                        Política de Privacidad
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                        Términos de Servicio
                    </a>
                </div>
            </div>
        </footer>
    );
}