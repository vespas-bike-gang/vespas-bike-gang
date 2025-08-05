'use client'
import { useState, useEffect } from 'react'
import { useAppSelector } from '@/app/lib/hooks'

import styles from './header.module.scss'

import { LogoSymbol } from '@/app/design-system/01-atoms/icons'
import ButtonHamburger from '@/app/design-system/02-molecules/button-hamburger/button-hamburger'
import Navigation from '@/app/design-system/02-molecules/navigation/navigation'

import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'

export default function Header () {
    const [data, setData] = useState<NavigationMenuItemFields[]>([{fields: { label: "Home", href: "/" }, contentTypeId: "link"}])
    const isMenuOpened = useAppSelector((state) => state.buttonHamburger.show)

    useEffect(() => {
        const getData = async () => {
            const body = {
                "content_type": 'navigationMenu',
                "fields.title": 'Header Menu'
            }   
            
            const response = await fetch('/api/contentful', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            
            if (!response.ok) {
                return console.log('Error on loading navigation menu')
            }
            
            const result = await response.json()
            setData(result.itens)
        }

        getData()
    }, [])

    return (
        <header className={`${styles['header']}
                         ${isMenuOpened ? styles['header--opened'] : styles['header--closed']}
                      `}>
            <div className={styles['header__main']}>
                <LogoSymbol color="#ffffff" width="54" height="40"></LogoSymbol>
                <ButtonHamburger onlyMobile={true}></ButtonHamburger>
            </div>
            <Navigation
                show={isMenuOpened}
                data={data}>
            </Navigation>
        </header>
    )
}
