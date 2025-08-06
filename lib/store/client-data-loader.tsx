'use client'
import { useAppDispatch } from '@/lib/store/hooks'
import { useEffect } from "react"
import { fetchData } from "@/lib/store/populate-store-slice"

export default function ClientDataLoader() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return null
}