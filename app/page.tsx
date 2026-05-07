
import Navbar from '@/components/navbar'
import Countdown from '../src/components/Countdown'
import Footer from '@/components/footer'

function page() {
  return (
    <>
      <Navbar/>
      <main>
        <Countdown/>
      </main>
      <Footer/>
    </>
  )
}

export default page