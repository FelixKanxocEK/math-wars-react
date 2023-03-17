import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/panel/Header';

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
          console.log(problema);
          const problemasSplit = problema.imagenes.path.split(',');
          problemasSplit.forEach((prob, key) => {
            const newProblem = prob.replace('["public', '').replace('"public', '').replace('"]', '').replace('"', '');
            newArray.push(newProblem)
          });
          problemasArray.push({...problemas, id: problema.id, planteamiento: problema.planteamiento, imagenes: newArray, respuesta: problema.respuesta})
          newArray = [];
        })
        setProblemas(problemasArray);
      }
    } catch (error) {
      window.location.reload()
    }
  }

  return (
    <div className='bg-gray-100'>
      <Header />
      <div>
        <h2 className='text-3xl font-bold text-center my-5 uppercase'>Preguntas</h2>
        <div className='flex flex-wrap w-width_90 mx-auto gap-3 my-3'>
          {problemas.map((problema, key) => (
            <div className='w-11/12 md:w-5/12 px-4 py-2 mx-auto bg-white border rounded-md shadow-md' key={key}>
              <h2><span className='font-bold'>Problema:</span> {problema.planteamiento}</h2>
              <div className="w-11/12 flex gap-2 items-center justify-center mx-auto mt-3"> 
                {problema.imagenes.map((imagen, key) => (
                  <div key={key}>
                    <img src={`${import.meta.env.VITE_BACKEND}/${imagen}`} alt="imagen" width={200}/>
                  </div>
                ))}
              </div>
              <div className='mt-3'>
                  Respuesta Correcta: <span className='font-bold'>{problema.respuesta + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Panel