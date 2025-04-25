"use server"
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/";

export async function AuthRedirect() {
    const session = await getServerSession(authOptions);

        if(!session) {
            redirect('/login')
        }

        
    return (<></>);
}