import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const Gender = () => {

    const [values, handleInputChange] = useForm({ genero: '' });

    return (
        <div>
            <label htmlFor="genero">Género <span className="text-red-500">*</span></label>
            <select name="genero" id="genero"
                onChange={handleInputChange}
                required
                className="mt-2 border-2 rounded px-4 py-2 w-full transition duration-300 focus:outline-none focus:border-indigo-300">
                <option value={values.genero}>Seleccionar...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="Prefiere no informar">Otro</option>
            </select>
        </div>
    )
}
