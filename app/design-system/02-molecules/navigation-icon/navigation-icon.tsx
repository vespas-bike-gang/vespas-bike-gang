import styles from './navigation-icon.module.scss'

import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'
import { LogoFacebook, LogoInstagram, LogoStrava, LogoYoutube } from '@/app/design-system/01-atoms/icons'

type Props = {
    data: NavigationMenuItemFields[],
    classList: {
        nav: string | Element,
        list: string | Element,
        item: string | Element,
        link: string | Element
    }
}

type IconType = 'instagram' | 'facebook' | 'youtube' | 'strava'

export default function NavigationIcon({data, classList}: Props) {
    const icons: Record<IconType, JSX.Element> = {
        instagram: <LogoInstagram/>,
        facebook: <LogoFacebook/>,
        youtube: <LogoYoutube/>,
        strava: <LogoStrava/>
    }

    const getIcon = (label: string) => {
        const labelLowerCase = label.toLowerCase() as IconType
        if(icons[labelLowerCase]) return icons[labelLowerCase]
        return null
    }

    return (
        <nav className={`${styles['navigation-icon']} ${classList}`}>
            <ol className={styles['navigation-icon__list']}>
                { data.map((entry: NavigationMenuItemFields, index: string | number) => (
                    <li key={index} className={styles['navigation-icon__item']}>
                        <a
                            href={entry.fields.href}
                            className={styles['navigation-icon__link']}
                            aria-label={entry.fields.label}>
                            {getIcon(entry.fields.label || '')}
                        </a>
                    </li>
                )) }
            </ol>
        </nav>
    )
}