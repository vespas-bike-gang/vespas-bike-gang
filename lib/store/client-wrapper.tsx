'use client'

import ClientDataLoader from "@/lib/store/client-data-loader"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ClientDataLoader/>
            { children }
        </>
    )
}