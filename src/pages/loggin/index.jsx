import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Logo from '../../assets/logo.png'
import './loggin.css'
import { useNavigate } from 'react-router-dom';

function Loggin() {
    
    const navigate = useNavigate()

    function handleClick() {
        navigate("/home")
    }
    
    return (
        <div className='my-container-loggin'>
            <h1 className="h1-nav-loggin">FOODS</h1>
            <header>
                <h2 className='h2-loggin-page'>Welcome! not registered? register here</h2>
            </header>
            <main>
                <Form className='form-login'>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button onClick={handleClick} type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <div className='div-footer'>
                    <img src={Logo} className='logo-footer' />
                </div>
            </main>

        </div>
    )
}

export default Loggin