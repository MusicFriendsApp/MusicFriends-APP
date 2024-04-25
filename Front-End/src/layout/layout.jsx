import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import './layout.css'

const Root = () => {
  return (
    <div className='page-container'>
      <Header />
        <section>
          <Outlet/>
        </section>
      <Footer/>
    </div>
  )
}

export default Root
