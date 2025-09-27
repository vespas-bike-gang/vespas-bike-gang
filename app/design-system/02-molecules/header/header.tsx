'use client'
import { useAppSelector } from '@/lib/store/hooks'

import styles from './header.module.scss'

import { LogoSymbol } from '@/app/design-system/01-atoms/icons'
import ButtonHamburger from '@/app/design-system/02-molecules/button-hamburger/button-hamburger'

type HeaderProps = {
  navigationOpened: React.ReactNode;
  navigationClosed: React.ReactNode;
};

export default function Header({ navigationOpened, navigationClosed }: HeaderProps) {
    const isMenuOpened = useAppSelector((state) => state.buttonHamburger.show)

    return (
        <header className={`${styles['header']}
                         ${isMenuOpened ? styles['header--opened'] : styles['header--closed']}
                      `}>
            <div className={styles['header__main']}>
                <LogoSymbol color="#ffffff" width="54" height="40"></LogoSymbol>
                <ButtonHamburger onlyMobile={true}></ButtonHamburger>
            </div>
            {isMenuOpened && navigationOpened}
            {!isMenuOpened && navigationClosed}
        </header>
    )
}
