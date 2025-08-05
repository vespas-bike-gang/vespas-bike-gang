'use client'
import StoreProvider  from '@/app/store-provider'
import Header from '@/app/design-system/03-organisms/header/header'
import Footer from '@/app/design-system/03-organisms/footer/footer'
import { LogoComplete } from './design-system/01-atoms/icons'

export default function Home() {
  return (
    <StoreProvider>
      <Header></Header>
      <LogoComplete></LogoComplete>
      <Footer></Footer>
    </StoreProvider>
  );
}