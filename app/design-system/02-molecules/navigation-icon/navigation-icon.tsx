import styles from './navigation-icon.module.scss'

import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'
import { LogoComplete, LogoHorizontal } from '@/app/design-system/01-atoms/icons'

type Props = {
    data: NavigationMenuItemFields[]
}

type IconType = 'instagram' | 'facebook' | 'youtube' | 'strava'

export default function NavigationIcon({data}: Props) {
    const icons: Record<IconType, JSX.Element> = {
        instagram: <LogoComplete />,
        facebook: <LogoHorizontal />,
        youtube: <LogoComplete/>,
        strava: <LogoHorizontal/>
    }

    const getIcon = (label: string) => {
        const labelLowerCase = label.toLowerCase() as IconType
        if(icons[labelLowerCase]) return icons[labelLowerCase]
        return null
    }

    return (
        <nav className={styles['navigation-icon']}>
            <ol className={styles['navigation-icon__list']}>
                { data.map((entry: NavigationMenuItemFields, index: string | number) => (
                    <li key={index} className={styles['navigation-icon__item']}>
                        <a href={entry.fields.href} className={styles['navigation-icon__link']}>
                            {entry.fields.label}
                            {getIcon(entry.fields.label)}
                        </a>
                    </li>
                )) }
            </ol>
        </nav>
    )
}