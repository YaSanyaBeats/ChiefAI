'use client'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { useSession } from 'next-auth/react'
import { handleSignOut } from '../../lib/auth'
import Image from 'next/image'

export default function Page() {
    const { data: session } = useSession()
    console.log('session', session)
    return (
        <div>
            <h1>Мы в дашборде ура {session?.user?.name}</h1>
            {session?.user?.image && (
                <Image src={session?.user?.image} alt="user image" width={96} height={96} />
            )}
            <Button variant="contained" endIcon={<LogoutIcon />} onClick={handleSignOut}>
                Выйти
            </Button>
        </div>
    )
}
