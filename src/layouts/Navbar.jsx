import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import navLinks from '../constants/navLinks'
import { logo } from '../assets'
import Button from '../components/Button'
import { useStoreActions, useStoreState } from 'easy-peasy'


const Navbar = () => {
    const navShow = useStoreState((state) => state.navShow);
    const setNavShow = useStoreActions((action) => action.setNavShow);

    return (
        <nav>
            <div className="navbar">
                <a href='' className="logo">
                    <img src={logo} alt="ogwugo" />
                </a>

                <div className="toggler" onClick={() => setNavShow(!navShow)}>
                    <Button classes={'toggle-btn'} text={<FontAwesomeIcon icon={!navShow ? faBars : faTimes} />} />
                </div>

                <div className={`links ${navShow && 'show'}`}>
                    <ul className="nav-links">
                        {navLinks.map((link, index) => (
                            <li key={index} className='nav-link'>
                                <a href="#">
                                    <FontAwesomeIcon icon={link.icon} />
                                    <span>{link.pathname}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="buttons">
                        <Button classes={'signup'} text={'sign up'} />
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar