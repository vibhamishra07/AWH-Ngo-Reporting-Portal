import React from 'react'
import "./NavBar.css"
import logo from './Images/logo.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const NavBar=()=> {
  return (
    <div className='header'>
        <div className='nav-bar'>
            <div className="logo">
                <img src={logo} alt="Logo"></img>
            </div>
            <div className='nav-title'>
                <div><p>Animals With Humanity</p>
                <p>Reporting Portal</p></div>
            </div>
            <div className='contact-buttons'>
                <ul>
                  <li><a href='https://www.facebook.com/animalswithhumanity' target="_blank"><FacebookIcon /></a></li>
                  <li><a href='https://www.instagram.com/animalswithhumanity_' target="_blank"><InstagramIcon /></a></li>
                  <li><a href='https://wa.me/message/MGDJVZCQKXI7K1' target="_blank"><WhatsAppIcon/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar