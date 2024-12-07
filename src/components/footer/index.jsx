import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import "./footer.css"
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate()

    function handleNavigate() {
        navigate("/desserts")
    }

    function handleNavigateHome() {
        navigate("/home")
    }

    return (
        <div className='div-footer'>

            <FontAwesomeIcon
                className='icon'
                onClick={handleNavigate}
                icon={faCookie}
            />

            <img src={Logo} className='logo-footer' />

            <FontAwesomeIcon
                className='icon-2'
                onClick={handleNavigateHome}
                icon={faUtensils} />

        </div>
    )
}

export default Footer;