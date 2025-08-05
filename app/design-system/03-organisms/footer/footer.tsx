'use client'
import { useState, useEffect } from 'react'

import styles from './footer.module.scss'

import NavigationIcon from "../../02-molecules/navigation-icon/navigation-icon"
import { LogoHorizontal } from '../../01-atoms/icons'

import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'

export default function Footer() {
    const [data, setData] = useState<NavigationMenuItemFields[]>([])
    
    useEffect(() => {
            const getData = async () => {
                const body = {
                    "content_type": 'navigationMenu',
                    "fields.title": 'Footer Menu'
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

    const classList = {
        nav: styles['footer__nav'],
        list: styles['footer__list'],
        item: styles['footer__item'],
        link: styles['footer__link']
    }

    return (
        <footer className={styles['footer']}>
            <h2 className={styles['footer__title']}>Emancipação Feminina sem freios</h2>
            <div>
                <NavigationIcon data={data}></NavigationIcon>
                <LogoHorizontal width={98} height={32} color="#ffffff"></LogoHorizontal>
            </div>
        </footer>
    )
}