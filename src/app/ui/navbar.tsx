import { SupervisedUserCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-4">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                />
            </Link>
            <div className="flex gap-4">
                <Link href="/">
                    <Button>
                        <h1>Home</h1>
                    </Button>
                </Link>
                <Link href="/detalles">
                    <Button>
                        <h1>Detalles</h1>
                    </Button>
                </Link>
                <Link href="/analisis">
                    <Button>
                        <h1>Análisis</h1>
                    </Button>
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <SupervisedUserCircleOutlined />
                <h1>Usuario</h1>
            </div>
        </div>
    )
}