import React from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

export default function AddUser({ openmodalUser, onClose }) {

    return (
        <>
            <Dialog className="relative z-10" open={openmodalUser} onClose={() => onClose(false)}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left mr-5 p-4">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Agregar Usuario
                                    </DialogTitle>
                                    <form className="max-w-md mx-auto mt-5 mb-5 w-full">
                                        <div className="relative z-0 w-full mb-5 group mt-4">
                                            <input type="number" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de colaborador</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group mt-4">
                                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre completo</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group mt-4">
                                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                                        </div>
                                        <label htmlFor="countries" className="block mb-2 text-sm  text-gray-800 mt-4">Departamento</label>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                            <option defaultValue="Prevencion">Prevención</option>
                                            <option value="Sistemas">Sistemas</option>
                                        </select>
                                        <label htmlFor="countries" className="block mb-2 text-sm  text-gray-800 mt-4">Rol</label>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                            <option defaultValue="Agente">Agente</option>
                                            <option value="Administrador">Administrador</option>
                                        </select>
                                        <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">Agregar</button>
                                        <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-4" onClick={() => onClose(false)}>Cancelar</button>
                                    </form>

                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}