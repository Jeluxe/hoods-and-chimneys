// External libraries
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

// components
import { Navbar, Footer } from './components'

// style
import Dummy1920x1080 from "./assets/images/dummy_1920x1080.png";
import './App.css'

const App: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const photoRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    if (photoRef.current) {
      const photoHeight = photoRef.current.offsetHeight;
      setIsSticky(window.scrollY >= photoHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main'>
      <img className='header-photo' src={Dummy1920x1080} alt="Top Photo" ref={photoRef} />
      <Navbar isSticky={isSticky} />
      <div className='body'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
