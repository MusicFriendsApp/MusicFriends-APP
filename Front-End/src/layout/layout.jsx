import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
    <Header />
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </div>
  )
}

export default Root
