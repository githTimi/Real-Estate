import React from 'react'
import Logo from '../../assets/tim2.png'
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter   innerWidth h-container">
                <img src={Logo} alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    <a href="">Houses</a>
                    <a href="">Our Value</a>
                    <a href=""> Contact us</a>
                    <a href=""> Get started</a>
                    <button className='button'>
                    <a href=""> Contact </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header