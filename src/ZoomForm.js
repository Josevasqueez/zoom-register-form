import React, { useState } from 'react'
import { ZoomContext } from './context/ZoomContext'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { useFetch } from './hooks/useFetch'

export const ZoomForm = () => {

    const [formdata, setFormdata] = useState({
        nombre: '',
        apellido: '',
        email: '',
        ciudad: '',
        telefono: '',
        rut: '',
        nacimiento: '',
        genero: '',
        fechas: [],
        error: 0,
        enviado: false
    });

    const readUrl = window.location.pathname.replace('/', '');
    const webinnar = useFetch('webinar/'+readUrl);
    const registrants = useFetch('registrants/'+readUrl);

    return (
        <>
            <Header />
            <ZoomContext.Provider value={{ formdata, setFormdata, webinnar, registrants }}>
                <Main />
            </ZoomContext.Provider>
            <Footer />
        </>
    )
}
