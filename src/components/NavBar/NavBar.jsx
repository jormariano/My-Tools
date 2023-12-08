import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <header>

            <nav>
                <ul className='un-list'>

                    <li><Link to="/" className="nav-link"> HOME </Link></li>

                    <li><NavLink to="/calculator" className="nav-link"> CALCULATOR </NavLink></li>

                    <li><NavLink to="/calendar" className="nav-link"> CALENDAR </NavLink></li>

                    <li><NavLink to="/todolist" className="nav-link"> TO DO LIST </NavLink></li>

                    <li><NavLink to="/currencyconverter" className="nav-link"> CURRENCY CONVERTER </NavLink></li>

                    <li><NavLink to="/worldtime" className="nav-link"> WORLD TIME </NavLink></li>

                    <li><NavLink to="/survey" className="nav-link"> SURVEY </NavLink></li>

                </ul>
            </nav>

        </header>
    )
}

export default NavBar