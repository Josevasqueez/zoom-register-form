import React, { useContext } from 'react'
import { ZoomContext } from '../../../context/ZoomContext';

export const Submit = () => {

    const { formdata, webinnar } = useContext(ZoomContext);

    return (
        <>
            {
                formdata.error > 0 || webinnar.loading || formdata.enviado ?
                    (
                        <button type="submit"
                            disabled
                            className="px-5 py-3 opacity-50 cursor-not-allowed w-40 bg-indigo-500 hover:bg-indigo-900 transition duration-300 rounded font-bold text-white focus:outline-none mt-5">Registrar</button>
                    )
                    :
                    (
                        <button type="submit"
                            className="px-5 py-3 w-40 bg-indigo-500 hover:bg-indigo-900 transition duration-300 rounded font-bold text-white focus:outline-none mt-5">Registrar</button>
                    )
            }
        </>
    )
}
