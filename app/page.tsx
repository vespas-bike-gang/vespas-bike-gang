import HeaderNavigation from '@/app/design-system/03-organisms/header-navigation/header-navigation'
import Footer from '@/app/design-system/03-organisms/footer/footer'
import Hero from './design-system/02-molecules/hero/hero'

import { useAppSelector } from '@/lib/store/hooks'

export default function Home() {
  return (
      <>
        <HeaderNavigation></HeaderNavigation>
        <main>
          <Hero></Hero>
        </main>
        <Footer></Footer>
      </>
  );
}