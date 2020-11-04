import React, { useContext } from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { LoadTitle } from '../ui-elements/LoadTitle'
import { LoadDescription } from '../ui-elements/LoadDescription'
import { ZoomContext } from '../../context/ZoomContext';


export const Webinar = () => {
    
    const { webinnar, registrants } = useContext(ZoomContext);
    moment.locale('es');

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4 my-6 md:mx-10">
                <h2 className="font-semibold">Tema</h2>
                <div className="col-span-6">
                    {
                        webinnar.loading ?
                            (
                                <LoadTitle />
                            )
                            :
                            (
                                <span className="md:font-semibold">{webinnar.data.topic}</span>
                            )
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4 my-6 md:mx-10">
                <h2 className="font-semibold">Descripción</h2>
                <div className="col-span-6">
                    {
                        webinnar.loading ?
                            (
                                <LoadDescription />
                            )
                            :
                            (
                                <p>{webinnar.data.agenda}</p>
                            )
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4 my-6 md:mx-10">
                <h2 className="font-semibold">Cupos</h2>
                <div className="col-span-6">
                    {
                        (registrants.loading || webinnar.loading) ?
                            (
                                <LoadTitle />
                            )
                            :
                            (
                                (webinnar.data.settings.registrants_restrict_number === 0) ?
                                    (
                                        <p>Ilimitados</p>
                                    )
                                    :
                                    (
                                        <p>{webinnar.data.settings.registrants_restrict_number - registrants.data.total_records} disponibles ({webinnar.data.settings.registrants_restrict_number})</p>
                                    )
                            )
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4 my-6 md:mx-10">
                <h2 className="font-semibold">Fecha</h2>
                <div className="col-span-6">
                    {
                        (webinnar.loading) ?
                            (
                                <LoadTitle />
                            )
                            :
                            (
                                <p>Día {moment(webinnar.data.start_time).format('dddd, MMMM D YYYY, h:mm:ss a')}</p>
                            )
                    }
                </div>
            </div>
        </>
    )
}
