'use client'
import { useAppDispatch } from "./hooks"
import { useEffect } from "react"
import { fetchData } from "./populate-store-slice"

export default function ClientDataLoader() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return null
}