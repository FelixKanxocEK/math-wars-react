import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-math-wars.png';

const Panel = () => {
  const [options, setOptions] = useState(['holaa', 'holaa x2']);


  return (
    <div className=''>
      <div className='w-full bg-blue-900 text-white p-4 flex justify-between items-center'>
        <div className='w-full md:w-width_49'>
          <img src={logo} alt="Logo math wars" width='100' />
        </div>
        <div className='w-full md:w-width_49 flex justify-end'>
          <Link to='agregar-pregunta' className='uppercase hover:text-gray-400 transition-all duration-300'>Agregar Pregunta</Link>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <form className='border-2 rounded-md shadow-md w-1/2 my-10 py-5 px-4 bg-white'>
          <div className='flex flex-col'>
            <label htmlFor="problem" className='font-bold mb-1'>Problema: </label>
            <input
              id='problem'
              name='problem'
              type="text"
              placeholder='Escribe el problema...'
              className='border-2 py-2 px-1 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='option' className='font-bold mb-1'>Respuestas:</label>
            <input type="file" name="option" id="option" />
            <input type="button" value="Agregar Respuesta" className='px-3 py-1 roubded bg-blue-700  text-white ' />
          </div>
          <div className="flex flex-col mt-4">
            <ol>
              {options.length > 0 ? options.map(option => (
                (
                  <li>{option}</li>
                )
              )) : null}
            </ol>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Panel