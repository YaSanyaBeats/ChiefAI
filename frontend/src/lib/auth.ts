import { signIn, signOut, useSession } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const handleSignIn = () => 
{
    console.log(123);
    signIn('google');
}
export const handleSignOut = () => signOut();

export const authRedirect = () => {
    const router = useRouter();
    const { data: session } = useSession();
    console.log(session)

    useEffect(() => {
        if(!session) {
            router.push('/login');
        }
    }, []);

    return session;
}