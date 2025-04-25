import { signIn, signOut } from 'next-auth/react'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

export const handleSignIn = () => {
    signIn('google')
}
export const handleSignOut = () => signOut()
