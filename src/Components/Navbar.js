import './Styles/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faTruckMoving, faBell, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            
            <div className='navbar'>
                <ul className='logo-container'>
                    <li><FontAwesomeIcon icon={faTruckMoving}/></li>
                </ul>
                <ul className='icon-container'>
                    <li><button id='icon'><FontAwesomeIcon  icon={faHeart} style={{color: 'tomato'}}/></button></li>
                    <li><button id='icon'><FontAwesomeIcon icon={faBell} /></button></li>
                    <li><button id='icon'><FontAwesomeIcon icon={faMessage} /></button></li>
                    <li><button className='post-ad-btn' onClick={() => {
                        window.location = '/postAd';
                    }}>Post Ad</button></li>
                    <li><button className='profile-btn'><FontAwesomeIcon icon={faUser} /></button></li>
                </ul>
            </div>
        </div>
    )
}