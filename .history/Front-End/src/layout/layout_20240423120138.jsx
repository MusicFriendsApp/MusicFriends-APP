import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </div>
  )
}

export default Root
