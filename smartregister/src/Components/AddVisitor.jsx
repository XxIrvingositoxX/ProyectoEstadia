import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import axios from "axios";

export default function AddVisitor({ openmodalVisitor, onClose }) {
    const today = new Date();
    const todayis = today.toLocaleDateString();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    const [namev, setNamev] = useState('');
    const [company, setCompany] = useState('');
    const [identification, setIdentification] = useState('');
    const [comments, setComments] = useState('');
    const [statev, setStatev] = useState(true);
    const [datetodayv, setDatetodayv] = useState(todayis);
    const [entrancev, setEntrancev] = useState(time);
    const [exitv, setExitv] = useState('');

    const store = async (e) => {
        e.preventDefault();

        const newVisitor = {
            namev,
            company,
            identification,
            comments,
            statev,
            datetodayv,
            entrancev,
            exitv
        };

        try {
            const response = await axios.post('http://localhost:8000/visitors/', newVisitor);
            setNamev('')
            setCompany('');
            setIdentification('');
            setComments('');
            setStatev('');
            setDatetodayv('');
            setEntrancev('');
            setExitv('');
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <>
            <Dialog className="relative z-10" open={openmodalVisitor} onClose={() => onClose(false)}>
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
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left mr-5">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Agregar Visitante
                                    </DialogTitle>
                                    <form onSubmit={store} className="max-w-md mx-auto mt-5 mb-5 w-full">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required value={namev} onChange={(e) => setNamev(e.target.value)} />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre completo</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required value={company} onChange={(e) => setCompany(e.target.value)} />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Empresa</label>
                                        </div>
                                        <label className="block mb-2 text-sm font-medium text-gray-600">Tipo de identificación</label>
                                        <select className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5" value={identification} onChange={(e) => setIdentification(e.target.value)} required>
                                            <option>Elige una opción</option>
                                            <option value='INE'>INE</option>
                                            <option value="Licencia de conducir">Licencia de conducir</option>
                                            <option value="ID de la empresa">Identificación de la empresa</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                        <div className="relative z-0 w-full mb-5 mt-4 group">
                                            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required value={comments} onChange={(e) => setComments(e.target.value)} />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comentarios</label>
                                        </div>
                                        <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5" onClick={() => onClose(false)}>Agregar</button>
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