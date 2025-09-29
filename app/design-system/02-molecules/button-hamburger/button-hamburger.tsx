import { useAppDispatch , useAppSelector } from '@/lib/store/hooks'
import { setShow } from './button-hamburger-slice'

import styles from './button-hamburger.module.scss'

import { IconHamburgerMenu, IconClose } from '@/app/design-system/01-atoms/icons'

type Props = {
    ariaLabel?: {
        hide: string,
        show: string
    },
    onlyMobile: boolean
}

const ariaLabelDefault = {
    hide: 'Esconder menu',
    show: 'Mostrar menu'
}

export default function ButtonHamburger({ariaLabel = ariaLabelDefault, onlyMobile}: Props) {
    const show = useAppSelector((state) => state.buttonHamburger.show)
    const dispatch = useAppDispatch()

    return (
        <button className={onlyMobile ? styles['button-hamburger--only-mobile'] : styles['button-hamburger']} onClick={() => dispatch(setShow())} aria-label={!show ? ariaLabel.show : ariaLabel.hide}>
            {show ? ( <IconClose></IconClose> )
                  : ( <IconHamburgerMenu></IconHamburgerMenu>)
            }
        </button>
    )
}