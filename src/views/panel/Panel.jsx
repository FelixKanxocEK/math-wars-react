import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/panel/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Panel = () => {
  const [problemas, setProblemas] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    getProblemas();
  }, [])

  const getProblemas = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND}/panel`);
      const problemasArray = [];
      if (response.status == 200) {
        let newArray = [];
        response.data.data.map(problema => {
          const problemasSplit = problema.imagenes.path.split(',');
          problemasSplit.forEach((prob, key) => {
            const newProblem = prob.replace('["', '').replace('"', '').replace('"]', '').replace('"', '').replace(/\\\\/g, '/');
            newArray.push(newProblem)
          });
          problemasArray.push({ ...problemas, id: problema.id, planteamiento: problema.planteamiento, imagenes: newArray, respuesta: problema.opcion })
          newArray = [];
        })
        setProblemas(problemasArray);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const eliminarProblema = async (id) => {
    event.preventDefault();
    Swal.fire({
      title: '¿Desea eliminar este problema?',
      icon: 'question',
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#166534',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#991b1b'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${import.meta.env.VITE_BACKEND}/eliminar-ejercicio/${id}`);
          if (response.status == 200) {
            Swal.fire({
              title: response.data.msg,
              icon: 'success'
            }).then(result => {
              if (result.isConfirmed) {
                setProblemas([]);
                getProblemas();
              }
            });
          }
        } catch (error) {
          Swal.fire({
            title: error.response.data.msg,
            icon: 'error'
          }).then(result => {
            if (result.isConfirmed) {
              setProblemas([]);
              getProblemas();
            }
          })
        }
      }
    });
  }

  return (
    <div className='bg-gray-100'>
      <Header />
      <div>
        <h2 className='text-3xl font-bold text-center my-5 uppercase'>Preguntas</h2>
        <div className='flex flex-wrap w-width_90 mx-auto gap-3 my-3'>
          {problemas.map((problema, key) => (
            <div className='w-11/12 md:w-5/12 px-6 py-4 mb-5 mx-auto bg-white border rounded-md shadow-md' key={key}>
              <div className='flex justify-between items-center'>
                <h2>
                  <span className='font-bold'>Problema:</span> {problema.planteamiento}
                </h2>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className='hover:cursor-pointer text-red-700 text-lg'
                  onClick={() => eliminarProblema(problema.id)}
                />
              </div>
              <div className="w-full md:flex gap-2 items-center justify-between mt-3">
                {problema.imagenes.map((imagen, key) => (
                  <div key={key} className='my-3 md:my-0'>
                    <img src={`${import.meta.env.VITE_BACKEND}/${imagen}`} alt="imagen" width={300} />
                  </div>
                ))}
              </div>
              <div className='mt-3 font-bold'>
                Respuesta Correcta: <span className='font-normal'>{problema.respuesta + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Panel