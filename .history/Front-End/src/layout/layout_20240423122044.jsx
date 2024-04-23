import Footer from '../components/Footer/Footer'
import PrimarySearchAppBar from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
    <PrimarySearchAppBar />
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </div>
  )
}

export default Root
