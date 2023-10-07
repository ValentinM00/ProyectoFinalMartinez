import React from 'react';
import { NavLink } from 'react-router-dom';
import Css from './styles.css';
import Cartwidget from '../CartWidget/cartw';

const Navbar = () => {
    return (
        <header>
            <div className='menu'>
                    <h1 className='logo'>BABYLON</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink  to='/categoria/Ropahombre'>Ropa hombre</NavLink>
                        </li>
                        <li>
                            <NavLink  to='/categoria/Ropamujer'>Ropa mujer</NavLink>
                        </li>
                        <li>
                            <NavLink  to='/'>Contactanos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Cart'>
                                <Cartwidget />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navbar