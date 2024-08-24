import { useState,useEffect } from 'react';
import packageImg from '../assets/package.png'
import { FaBars } from 'react-icons/fa';
export default function Navbar() {

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [menuOpen,setMenuOpen]=useState(true)
  return (
    <div className='nav-main-container'>
      
    
      <nav className='navbar'>

      <div className='nav-container'>
        <div className='title'>
          <p className='title-text1' >MyFast<span style={{color:'#63b178'}}>X</span></p>
          <img className='package' src={packageImg}></img>
          <p className='title-text2'>Partner</p>
        </div>

        
        <div className='drop-down-btn' style={{ cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)} ><FaBars style={{ cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)} /></div>
      </div>


      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>

          <button className='navbar-button'>Sign Up</button>
          <button className='navbar-button'>Log in</button>
      </ul>

      </nav>
    </div>
  )
}