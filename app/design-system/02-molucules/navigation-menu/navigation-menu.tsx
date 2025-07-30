import styles from './navigation-menu.module.scss'

import { getEntriesByTitle } from '@/lib/contentful'
import { LogoSymbol } from '@/app/design-system/01-atoms/icons'

type NavigationMenuItemFields = {
    fields: {
        label: string;
        href: string;
    }
    contentTypeId: string
}

export default async function NavigationMenu () {
    const entries = await getEntriesByTitle({
        contentType: 'navigationMenu',
        title: 'Header Menu'
    })
    const data = entries.itens || []

    return (
        <nav className={styles['navigation']}>
            <LogoSymbol color="#ffffff" width="54" height="40"></LogoSymbol>
            <ol>
                { data.map((entry: NavigationMenuItemFields, index: string | number) => (
                    <li key={index}>
                        <a href={entry.fields.href}>{entry.fields.label}</a>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
