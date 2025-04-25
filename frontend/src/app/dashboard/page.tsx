'use client'
import { Button, TextField } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { signOut, useSession } from 'next-auth/react'
import { handleSignOut } from '../../lib/auth'

export default function Page() {
    const { data: session } = useSession()

    return (
        <div>
            <h1>Мы в дашборде ура {session?.user?.name}</h1>
            <img src={session?.user?.image} alt="" />
            <Button variant="contained" endIcon={<LogoutIcon />} onClick={handleSignOut}>
                Выйти
            </Button>
        </div>
    )
}
