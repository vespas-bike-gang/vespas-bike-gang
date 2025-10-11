import styles from './navigation.module.scss'
import { NavigationMenuItemFieldsInterface } from '@/app/entities/NavigationMenuItemFieldsInterface'
import { getEntriesByTitle } from '@/lib/contentful/contentful'

type Props = {
    show: boolean,
    classNameList?: {
        nav?: string,
        list?: string,
        item?: string,
        link?: string
    }
    menuType?: string
}

export default async function Navigation({ show, classNameList, menuType }: Props) {
    const body = {
        "content_type": 'navigationMenu',
        "fields.title": menuType
    }
    const response = await getEntriesByTitle(body)
    const navigationItems:NavigationMenuItemFieldsInterface[] = response.itens

    return (
        <nav className={`${styles['navigation']}
                         ${show ? styles['navigation--opened'] : styles['navigation--closed']}
                         ${classNameList?.nav}
                       `}>
            <ol className={`${styles['navigation__list']} ${classNameList?.list}`}>
                { navigationItems.map((entry: NavigationMenuItemFieldsInterface, index: string | number) => (
                    <li key={index} className={`${styles['navigation__item']} ${classNameList?.item}`}>
                        <a href={entry.fields.href} className={`${styles['navigation__link']} ${classNameList?.link}`}>
                            {entry.fields.label}
                        </a>
                    </li>
                )) }
            </ol>
        </nav>
    )
}