"use client";
import { Avatar, Box, Button, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import UserMenu from "./userMenu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>

      <div className="flex gap-4">
        <Link href="/analytics/dashboard">
          <Button>
            <h1>Home</h1>
          </Button>
        </Link>
        <Link href="/analytics/dashboard/details">
          <Button>
            <h1>Detalles</h1>
          </Button>
        </Link>
        <Link href="/analytics/dashboard/analytics">
          <Button>
            <h1>Análisis</h1>
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2 z-10">
        <Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </div>

      <UserMenu anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
}