import React, { useEffect, useState } from 'react'
import Formulario from '../../components/panel/Formulario';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../../components/panel/Header';

const AgregarProblema = () => {
    const [options, setOptions] = useState([]);
    const [errorOptions, setErrorOptions] = useState('');
    const [charCode, setCharCode] = useState(97);
    const [problem, setProblem] = useState({ value: '', error: '' });
    const [previewImage, setPreviewImage] = useState([]);
    const [messageError, setMessageError] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);

    const handleChangeImage = (e) => {
        const array = [];
        const arrayOptions = [];
        Object.values(e.files).forEach((file, key) => {
            arrayOptions.push(file);
            setOptions(arrayOptions);
            const image = URL.createObjectURL(e.files[key]);
            array.push(image);
        });
        return setPreviewImage(array);
    }

    const convertCharCode = (value) => {
        return String.fromCharCode(value);
    }

    const deleteOption = (option) => {
        event.preventDefault();
        setPreviewImage(previewImage.filter((op, key) => key !== option));
        setOptions(options.filter((op, key) => key !== option));
    }

    const handleSubmit = async () => {
        event.preventDefault();
        setLoading(true);
        if (previewImage.length < 2) {
            setErrorOptions('Deben haber al menos 2 respuestas');
        }
        try {
            const saveAnswer = await axios.post(`${import.meta.env.VITE_BACKEND}/registrar-ejercicio`, {
                problem: problem.value,
                correct: correctAnswer.value
            });
            if (saveAnswer.status == 201) {
                const formData = new FormData();
                options.forEach(option => {
                    formData.append('options', option);
                });

                const response = await axios({
                    method: 'POST',
                    url: `${import.meta.env.VITE_BACKEND}/guardarImagen-ejercicio/${saveAnswer.data.problema}`,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Accept": "json/application"
                    }
                });

                setLoading(false);
                if (response.status == 201) {
                    setOptions([]);
                    setProblem({ value: '', error: '' });
                    setPreviewImage({ value: '', error: '' });
                    setCorrectAnswer({ value: '', error: '' });
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Lo sentimos, ha habido un error',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        } catch (error) {
            setLoading(false);
            if (error.response.status == 400) {
                setProblem({ ...problem, error: error.response.data.errors.problem });
                setCorrectAnswer({ ...correctAnswer, error: error.response.data.errors.correct });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: response.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div className='bg-gray-100'>
            <Header />
            <Formulario
                handleSubmit={handleSubmit}
                handleChangeImage={handleChangeImage}
                previewImage={previewImage}
                messageError={messageError}
                options={options}
                convertCharCode={convertCharCode}
                deleteOption={deleteOption}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                charCode={charCode}
                loading={loading}
                problem={problem}
                setProblem={setProblem}
                errorOptions={errorOptions}
            />
        </div>
    )
}

export default AgregarProblema