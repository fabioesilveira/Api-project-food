import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import "./footer.css"
import Logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className='div-footer'>
            
            <FontAwesomeIcon className='icon' icon={faCookie} />
            
            <img src={Logo} className='logo-footer'/>

            <FontAwesomeIcon className='icon-2' icon={faUtensils} />
            
        </div>
    )
}

export default Footer;