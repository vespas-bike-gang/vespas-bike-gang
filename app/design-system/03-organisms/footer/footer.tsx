import { getEntriesByTitle } from '@/lib/contentful'

import styles from './footer.module.scss'

import NavigationIcon from "@/app/design-system/02-molecules/navigation-icon/navigation-icon"
import { LogoHorizontal } from '@/app/design-system/01-atoms/icons'

import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'

export default async function Footer() {
    const classList = {
        nav: styles['footer__nav'],
        list: styles['footer__list'],
        item: styles['footer__item'],
        link: styles['footer__link']
    }

    const body = {
        "content_type": 'navigationMenu',
        "fields.title": 'Footer Menu'
    }
    const response = await getEntriesByTitle(body)
    
    let title = ''
    const links = response.itens.filter((link: NavigationMenuItemFields) => {
          if(link.fields.text) {
            title = link.fields.text
          return
        }
        return link
    })

    return (
        <footer className={styles['footer']}>
            <h2 className={styles['footer__title']} dangerouslySetInnerHTML={{ __html: title || ''}}></h2>
            <div className={styles['footer__container']}>
                <NavigationIcon data={links} classList={classList}></NavigationIcon>
                <LogoHorizontal width={98} height={32} color="#ffffff"></LogoHorizontal>
            </div>
        </footer>
    )
}