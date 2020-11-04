import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const Tlf = () => {

    const [values, handleInputChange] = useForm({ telefono: '' });
    const { telefono } = values;

    return (
        <div>
            <label htmlFor="telefono">Teléfono <span className="text-red-500">*</span></label>
            <input type="tel"
                className="mt-2 border-2 rounded px-4 py-2 w-full transition duration-300 focus:outline-none focus:border-indigo-300"
                name="telefono"
                value={telefono}
                onChange={handleInputChange}
                required />
        </div>
    )
}
