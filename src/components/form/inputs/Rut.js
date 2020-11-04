import React, { useContext, useEffect, useState } from 'react'
import { ZoomContext } from '../../../context/ZoomContext';
import { rutEsValido } from '../../../funtions/verificarRut';
import { useForm } from '../../../hooks/useForm';

export const Rut = () => {

    const [values, handleInputChange] = useForm({ rut: '' });
    const { rut } = values;

    const { formdata, setFormdata } = useContext(ZoomContext);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (rut !== '') {
            if (rutEsValido(rut)) {
                if (error) {
                    setFormdata({ ...formdata, error: formdata.error - 1 });
                    setError(false);
                }
            }
            else {
                if (!error) {
                    setFormdata({ ...formdata, error: formdata.error + 1 });
                    setError(true);
                }
            }
        }
    }, [rut, error, formdata, setFormdata]);


    return (
        <div>
            <label htmlFor="rut">RUT <span className="text-red-500">* {error ? (<b>El RUT no es válido</b>) : ''}</span></label>
            <input type="text"
                className={`mt-2 border-2 ${error && 'border-red-500'}  rounded px-4 py-2 w-full transition duration-300 focus:outline-none ${!error && 'focus:border-indigo-300'}`}
                name="rut"
                value={rut}
                onChange={handleInputChange}
                required />
            <small className="text-gray-500">Formato xxxxxx-x</small>
        </div>
    )
}
