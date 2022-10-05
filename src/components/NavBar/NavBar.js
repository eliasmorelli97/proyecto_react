import CartWidget from '../CartWidget/CartWidget';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className='link' as={Link} to='/'>
                        Hardware Knights
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='link' as={Link} to='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link className='link' as={Link} to='/category/procesadores'>
                        Procesadores
                    </Nav.Link>
                    <Nav.Link className='link' as={Link} to='/category/memorias-ram'>
                        Memorias Ram
                    </Nav.Link>
                    <Nav.Link className='link' as={Link} to='/category/placas-de-video'>
                        Placas de Video
                    </Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;