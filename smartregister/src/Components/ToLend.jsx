import React, {useState, useEffect} from "react";
import axios from "axios";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

export default function ToLend({ openmodalLend, onClose, keyId, updatedList }) {
    const URI = 'http://localhost:8000/keys/';
    const [state, setState] = useState(false);
    const today = new Date();
    const todayis = today.toLocaleDateString();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [responsible, setResponsible] = useState('');

    useEffect(() => {
        if (keyId) {
            getUserbyId();
        }
    }, [keyId]);

    const getUserbyId = async () => {
        try {
            const res = await axios.get(`${URI}${keyId}`);
            setState(res.data.state);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${URI}${keyId}`, { statek: false, exitk: time, datetodayexitk: todayis, responsible: responsible});
            onClose(false);
            updatedList();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };


    return (
        <>
            <Dialog className="relative z-10" open={openmodalLend} onClose={() => onClose(false)}>
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
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 ">
                                        Prestar llave
                                    </DialogTitle>
                                    <form className="max-w-md mx-auto mt-5 mb-5 w-full" onSubmit={update}>
                                    <div className="relative z-0 w-full mb-5 group mt-4">
                                            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required value={responsible} onChange={(e) => setResponsible(e.target.value)} />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre completo</label>
                                        </div>
                                        <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">Aceptar</button>
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