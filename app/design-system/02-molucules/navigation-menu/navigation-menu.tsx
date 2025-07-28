import styles from './navigation-menu.module.scss'

import { LogoSymbol } from '@/app/design-system/01-atoms/icons'

export default function NavigationMenu() {
    return (
        <nav className={styles['navigation']}>
            <LogoSymbol></LogoSymbol>
        </nav>
    )
}