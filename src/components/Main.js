import React from 'react'
import { Form } from './form/Form'
import { Webinar } from './form/Webinar'
import { Banner } from './ui-elements/Banner'

export const Main = () => {
    return (
        <main className="max-w-screen-lg mx-auto px-8 my-5">
            <Banner/>
            <hr />
            <Webinar/>
            <hr />
            <Form/>
        </main>
    )
}
