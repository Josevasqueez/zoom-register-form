import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const FirstName = () => {

    const [values, handleInputChange] = useForm({ nombre: '' });
    const { nombre } = values;

    return (
        <div>
            <label htmlFor="nombre">Nombre <span className="text-red-500">*</span></label>
            <input type="text"
                className="mt-2 border-2 rounded px-4 py-2 w-full transition duration-300 focus:outline-none focus:border-indigo-300"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
                required />
        </div>
    )
}
