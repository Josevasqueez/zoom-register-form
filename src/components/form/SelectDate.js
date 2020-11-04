import React from 'react'

export const SelectDate = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-1 md:gap-4 my-6 md:mx-10">
            <h2 className="font-semibold">Hora</h2>
            <div className="col-span-6">
                <p>Puede elegir asistir a uno o más de los siguientes seminarios web.</p>
                <form className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <label htmlFor="hora1">
                            <input type="checkbox" name="hora1" id="hora1" className="mr-2" />
                                2 nov 2020 09:00 AM <span className="text-gray-500 ml-2">10/20</span>
                        </label>
                        <label htmlFor="hora2">
                            <input type="checkbox" name="hora2" id="hora2" className="mr-2" />
                                2 nov 2020 09:00 AM <span className="text-gray-500 ml-2">10/20</span>
                        </label>
                        <label htmlFor="hora3">
                            <input type="checkbox" name="hora3" id="hora3" className="mr-2" />
                                2 nov 2020 09:00 AM <span className="text-gray-500 ml-2">10/20</span>
                        </label>
                        <label htmlFor="hora4">
                            <input type="checkbox" name="hora4" id="hora4" className="mr-2" />
                                2 nov 2020 09:00 AM <span className="text-gray-500 ml-2">10/20</span>
                        </label>
                    </div>
                </form>
                <p className="mt-10 text-xs">* Se muestra la hora en Santiago, Chile.</p>
                <p className="text-gray-500 text-xs">** Los numeros en gris significan la cantidad de cupos disponibles
                        sobre los totales.</p>
            </div>
        </div>
    )
}
