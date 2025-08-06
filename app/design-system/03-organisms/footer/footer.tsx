'use client'
import { useState, useEffect } from 'react'
import { useAppSelector } from '@/app/lib/store/hooks'

import styles from './footer.module.scss'

import NavigationIcon from "../../02-molecules/navigation-icon/navigation-icon"
import { LogoHorizontal } from '../../01-atoms/icons'

import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'

export default function Footer() {
    const [data2, setData] = useState<NavigationMenuItemFields[]>([])
    const [title, setTitle] = useState<string>()

    const data = useAppSelector(state => state.data)

    console.log(data)

    const classList = {
        nav: styles['footer__nav'],
        list: styles['footer__list'],
        item: styles['footer__item'],
        link: styles['footer__link']
    }
    
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
                const links = result.itens.filter((link: NavigationMenuItemFields) => {
                    if(link.fields.text) {
                        setTitle(link.fields.text)
                        return
                    }
                    return link
                })
                setData(links)
            }    
            getData()
        }, [])

    return (
        <footer className={styles['footer']}>
            <h2 className={styles['footer__title']} dangerouslySetInnerHTML={{ __html: title || ''}}></h2>
            <div className={styles['footer__container']}>
                <NavigationIcon data={data2} classList={classList}></NavigationIcon>
                <LogoHorizontal width={98} height={32} color="#ffffff"></LogoHorizontal>
            </div>
        </footer>
    )
}