import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import "./footer.css"

function Footer() {
    return (
        <div>
            <h2>HI</h2>
            
            <FontAwesomeIcon className='icon' icon={faCookie} />
            <FontAwesomeIcon icon={faUtensils} />
            
        </div>
    )
}

export default Footer;