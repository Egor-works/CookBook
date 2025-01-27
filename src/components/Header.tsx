import { Link } from 'react-router-dom';
import { BiSolidFoodMenu, BiInfoSquare } from "react-icons/bi";

function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    CookBook
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to={`/about`}><BiInfoSquare size={25} /></Link>
                    </li>
                    <li>
                        <Link to={`/`}><BiSolidFoodMenu size={25} /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };