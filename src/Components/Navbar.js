import './Styles/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fa0, faBell, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul>
                <li><FontAwesomeIcon icon={faHeart} style={{fontSize: '30px', color: 'tomato', position:'relative', top:'10%'}}/></li>
                <li><FontAwesomeIcon icon={faBell} style={{fontSize: '30px', color: 'lightgray', position:'relative', top:'10%'}}/></li>
                <li><FontAwesomeIcon icon={faMessage} style={{fontSize: '30px', color: 'lightgray', position:'relative', top:'10%'}}/></li>
                <li><button className='profile-btn'>A</button></li>
                <li><button className='post-ad-btn'>Post Ad</button></li>
            </ul>
        </div>
    )
}