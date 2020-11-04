import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const Birthday = () => {

    const [values, handleInputChange] = useForm({ nacimiento: '' });
    const { nacimiento } = values;

    return (
        <div>
            <label htmlFor="nacimiento">Fecha de nacimiento <span className="text-red-500">*</span></label>
            <input type="date" max="2021-01-01"
                className="mt-2 border-2 rounded px-4 py-2 w-full transition duration-300 focus:outline-none focus:border-indigo-300"
                name="nacimiento"
                value={nacimiento}
                onChange={handleInputChange}
                required />
        </div>
    )
}
