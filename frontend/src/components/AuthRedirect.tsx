import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const AuthRedirect = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if(!session) {
            router.push('/login');
        }
    }, [])

        
    return (<></>);
}