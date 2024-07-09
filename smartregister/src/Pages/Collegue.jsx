import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Date from "../Components/Date";
import { Table, Button } from "flowbite-react";
import InModal from "../Components/InModal";
import OutModal from "../Components/OutModal";

function Collegue() {
    useEffect(() => {
        document.title = "Colaboradores";
    }, []);
    const [ModalIn, setModalIn] = useState(false);
    const [ModalOut, setModalOut] = useState(false);
    const [isIn, setIsIn] = useState(true);

    const handleInClick = () => {
        setIsIn(false);
        setModalIn(true);
    };

    const handleOutClick = () => {
        setIsIn(true);
        setModalOut(true);
    };

    return (
        <>
            <Header />
            <Date />
            <InModal openmodalIn={ModalIn} onClose={() => setModalIn(false)} />
            <OutModal openmodalOut={ModalOut} onClose={() => setModalOut(false)} />
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="grid grid-cols-2 gap-8 sm:mt-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse ">
                        <form className="max-w-md mx-auto w-full lg:ml-40">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                                Buscar
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Colaborador..."
                                    required
                                />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-sky-800 hover:bg-sky-900 font-medium rounded-lg text-sm px-4 py-2">
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col-reverse lg:ml-40">
                        <form className="max-w-md mx-auto w-full">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
                                Selecciona una opción
                            </label>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4"
                            >
                                <option value="">Ama de llaves</option>
                                <option value="">Sistemas</option>
                                <option value="">BellBoys</option>
                                <option value="">Telefonos</option>
                            </select>
                        </form>
                    </div>
                </dl>
            </div>
            <div className="flex mt-14">
                <div className="overflow-x-auto w-5/6 mx-auto">
                    <Table hoverable className="min-w-full text-xs border justify-center text-center">
                        <Table.Head className="text-lg">
                            <Table.HeadCell className="p-2">No.Colaborador</Table.HeadCell>
                            <Table.HeadCell className="p-2">Nombre</Table.HeadCell>
                            <Table.HeadCell className="p-2">Departamento</Table.HeadCell>
                            <Table.HeadCell className="p-2">Fecha</Table.HeadCell>
                            <Table.HeadCell className="p-2">Entrada</Table.HeadCell>
                            <Table.HeadCell className="p-2">Salida</Table.HeadCell>
                            <Table.HeadCell className="p-2">Estado</Table.HeadCell>
                            <Table.HeadCell className="p-2">Acción</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y text-base">
                            <Table.Row className="bg-white text-slate-900">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 p-2">
                                    12332
                                </Table.Cell>
                                <Table.Cell className="p-2">Gerardo Gomez Palacios</Table.Cell>
                                <Table.Cell className="p-2">Ama de llaves</Table.Cell>
                                <Table.Cell className="p-2">29/06/2024</Table.Cell>
                                <Table.Cell className="p-2">10:24:23</Table.Cell>
                                <Table.Cell className="p-2">6:22:32</Table.Cell>
                                <Table.Cell className="p-2">Fuera</Table.Cell>
                                <Table.Cell className="p-2 place-content-center">
                                    {isIn ? (
                                        <Button className="bg-green-500 hover:bg-green-700 pr-4 pl-4 lg:left-12" onClick={handleInClick}>
                                            Entrada
                                        </Button>
                                    ) : (
                                        <Button className="bg-red-600 hover:bg-red-700 pr-4 pl-4 lg:left-12" onClick={handleOutClick}>
                                            Salida
                                        </Button>
                                    )}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}
export default Collegue;