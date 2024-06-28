import React from 'react';
import Playa from '../Images/Playa.jpg'

function FormS() {
    return (
        <>
            <div className="relative bottom-16 flex min-h-full flex-1 flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-44 w-auto rounded-lg"
                        src={Playa}
                        alt="Playa Resorts"
                    />
                    <h2 className="mt-14 text-center text-4xl font-bold leading-9 tracking-tight text-white">
                        ¡Bienvenido!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-base font-medium leading-6 text-white">
                                No.Asociado
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type=""
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-base font-medium leading-6 text-white">
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default FormS;