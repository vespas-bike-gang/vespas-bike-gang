import styles from './navigation.module.scss'
import { NavigationMenuItemFields } from '@/app/entities/NavigationMenuItemFields'

type Props = {
    data: NavigationMenuItemFields[],
    show: boolean,
    classNameList?: {
        nav?: string,
        list?: string,
        item?: string,
        link?: string
    }
}

export default function Navigation({ data, show, classNameList }: Props) {
    return (
        <nav className={`${styles['navigation']}
                         ${show ? styles['navigation--opened'] : styles['navigation--closed']}
                         ${classNameList?.nav}
                       `}>
            <ol className={`${styles['navigation__list']} ${classNameList?.list}`}>
                { data.map((entry: NavigationMenuItemFields, index: string | number) => (
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