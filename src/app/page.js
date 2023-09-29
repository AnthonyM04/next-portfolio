import Hero from '@/components/Hero'
import Sidemenu from '@/components/Sidemenu'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Sidemenu/>
      <div class='m-65'>
        <Hero/>
      </div>
    </main>
  )
}
