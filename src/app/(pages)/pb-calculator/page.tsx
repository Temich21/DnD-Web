import { Header } from '@app/app/components/Header/Header'
import { Navigation } from '@app/app/components/Navigation/Navigation'

export default function Home() {
  return (
    <main>
      <Header name='Home'>
      </Header>
      <main>
        <Navigation />
        <div className='h-welcomeText flex justify-center items-center text-welcomeText text-header ml-welcomeText'>Welcome to our D&D website!</div>
      </main>
    </main>
  )
}
