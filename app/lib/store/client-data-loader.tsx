'use client'
import { useAppDispatch } from "./hooks"
import { useEffect } from "react"
import { fetchData } from "./populate-store-slice"
import type { AppDispatch } from '@/app/lib/store/store'
import { useDispatch } from 'react-redux'

export default function ClientDataLoader() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return null
}