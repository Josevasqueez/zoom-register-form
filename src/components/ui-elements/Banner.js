import React from 'react'
import TopBanner from './../../banner.png'
import Logo from './../../logo.png'

export const Banner = () => {
    return (
        <>
            <img src={TopBanner} alt="Banner" className="w-full md:w-9/12 mx-auto" />
            <div className="my-10 text-center">
                <img src={Logo} alt="Logo" className="w-40 mx-auto mb-2" />
                <h1 className="text-xl md:text-3xl">Inscripción al seminario Web</h1>
            </div>
        </>
    )
}
