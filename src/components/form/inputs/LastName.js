import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const LastName = () => {

    const [values, handleInputChange] = useForm({ apellido: '' });
    const { apellido } = values;

    return (
        <div>
            <label htmlFor="apellido">Apellido <span className="text-red-500">*</span></label>
            <input type="text"
                className="mt-2 border-2 rounded px-4 py-2 w-full transition duration-300 focus:outline-none focus:border-indigo-300"
                name="apellido"
                value={apellido}
                onChange={handleInputChange}
                required />
        </div>
    )
}
