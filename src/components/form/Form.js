import React, { useContext, useState } from 'react'
import { ZoomContext } from '../../context/ZoomContext'
import { Birthday } from './inputs/Birthday'
import { City } from './inputs/City'
import { Email } from './inputs/Email'
import { FirstName } from './inputs/FirstName'
import { Gender } from './inputs/Gender'
import { LastName } from './inputs/LastName'
import { MostText } from './inputs/MostText'
import { Rut } from './inputs/Rut'
import { Submit } from './inputs/Submit'
import { Tlf } from './inputs/Tlf'

export const Form = () => {

    const { formdata, setFormdata, webinnar } = useContext(ZoomContext);
    const { nombre, apellido, ciudad, email, telefono, rut, nacimiento, genero } = formdata;

    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        setFormdata({ ...formdata, enviado: true });

        const data = JSON.stringify({
            "email": email,
            "first_name": nombre,
            "last_name": apellido,
            "city": ciudad,
            "phone": telefono,
            "custom_questions": [
                {
                    "title": "RUT",
                    "value": rut
                },
                {
                    "title": "Fecha de Nacimiento",
                    "value": nacimiento
                },
                {
                    "title": "Género",
                    "value": genero
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: data,
        };

        fetch(`http://localhost:3700/webinar/${webinnar.data.id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setResponse(<p className="mt-5"><span className="font-semibold text-indigo-500">¡Bien!</span> Te has inscrito al webinar <b>{result.topic}</b>. El link para acceder es el siguiente: <a className="text-indigo-500" href={result.join_url} target="__blank">Clik aquí</a></p>)
            })
            .catch(err => {
                console.log(err);
                setFormdata({ ...formdata, enviado: false });
            })

    }


    return (
        <form className="my-10 md:mx-10" onSubmit={handleSubmit} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FirstName />
                <LastName />
                <Email />
                <City />
                <Tlf />
                <Rut />
                <Birthday />
                <Gender />
            </div>
            <MostText />
            <Submit />
            {response}
        </form >
    )
}
