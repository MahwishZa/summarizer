import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
          <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;