import './navbar.css';
import { FaUserAlt, FaSearch } from 'react-icons/fa';
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='left-nav-style'>
                <div className='logo'>
                    <h1>Audiophile</h1>
                </div>
                <div className='search-bar'>
                    <input type='text' className='search' name='search' placeholder='search' />
                    <div className='search-icon'>
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className='nav-menu'>
                <FaUserAlt />
            </div>
        </nav>
    )
}

export default Navbar;