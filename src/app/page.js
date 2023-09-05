import Hero from '@/components/Hero'
import Sidemenu from '@/components/Sidemenu'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Sidemenu/>
        <Hero/>
    </main>
  )
}
