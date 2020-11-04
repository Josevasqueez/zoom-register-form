import React, { useContext, useEffect, useState } from 'react'
import { ZoomContext } from '../../../context/ZoomContext';
import { useForm } from '../../../hooks/useForm';

export const Email = () => {

    const [values, handleInputChange] = useForm({ email: '' });
    const { email } = values;

    const { formdata, setFormdata } = useContext(ZoomContext);

    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(false);

    const checkValidation = ({ target }) => {
        setConfirm(target.value);
    }

    useEffect(() => {
        if (confirm !== '') {
            if (confirm === email) {
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
    }, [confirm, email, error, formdata, setFormdata]);


    return (
        <>
            <div>
                <label htmlFor="email">Dirección de e-mail <span className="text-red-500">*</span></label>
                <input type="email"
                    className="mt-2 border-2 rounded px-4 py-2 w-full transition duration-300 focus:outline-none focus:border-indigo-300"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required />
            </div>
            <div>
                <label htmlFor="confirm">Confirmar dirección de e-mail <span className="text-red-500">* {error ? (<b>El e-mail no es igual</b>) : ''}</span></label>
                <input type="email"
                    className={`mt-2 border-2 ${error && 'border-red-500'}  rounded px-4 py-2 w-full transition duration-300 focus:outline-none ${!error && 'focus:border-indigo-300'}`}
                    name="confirm"
                    value={confirm}
                    onChange={checkValidation}
                    required />
            </div>
        </>
    )
}
