import { signIn, signOut } from 'next-auth/react';

export const handleSignIn = () => 
{
    console.log(123);
    //signIn('google');
}
export const handleSignOut = () => signOut();