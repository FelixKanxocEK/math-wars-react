import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-math-wars.png';

const Header = () => {
    return (
        <div className='w-full bg-blue-900 text-white p-4 flex justify-between items-center'>
            <div className='w-full md:w-width_49'>
                <img src={logo} alt="Logo math wars" width='100' />
            </div>
            <div className='w-full md:w-width_49 flex justify-end'>
                <Link to='/panel' className='borde-enlace uppercase transition-all duration-300 mr-3'>Panel</Link>
                <Link to='/panel/agregar-problema' className='borde-enlace uppercase transition-all duration-300'>Agregar Pregunta</Link>
            </div>
        </div>
    )
}

export default Header