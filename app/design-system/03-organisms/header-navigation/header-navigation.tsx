import Navigation from '@/app/design-system/02-molecules/navigation/navigation'
import Header from '@/app/design-system/02-molecules/header/header'

export default function HeaderNavigation() {
    return (
        <Header
            navigationOpened={<Navigation show={true} menuType='Header Menu'/>}
            navigationClosed={<Navigation show={false} menuType='Header Menu'/>}
        >
        </Header>
    )
}
