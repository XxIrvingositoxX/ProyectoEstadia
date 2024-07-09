import React, { useEffect } from "react";
import Header from "../Components/Header";
import DateK from "../Components/DateK";
import { Table, Button } from "flowbite-react";

function Keys() {
    useEffect(() => {
        document.title = "Llaves";
    }, []);
    return (
        <>
            <Header />
            <DateK/>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="grid grid-cols-2 gap-8 sm:mt-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse ">
                        <form className="max-w-md mx-auto w-full lg:ml-40">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                                Buscar
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="No.Llave,Nombre..."
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4"
                            >
                                <option value="Prestadas">Prestadas</option>
                                <option value="Disponibles">Disponibles</option>
                            </select>
                        </form>
                    </div>
                </dl>
            </div>
            <div className="flex mt-14 ">
                <div className="overflow-x-auto w-5/6 mx-auto">
                    <Table hoverable className="min-w-full text-xs border justify-center text-center">
                        <Table.Head className="text-lg">
                            <Table.HeadCell className="p-2">No.Llave</Table.HeadCell>
                            <Table.HeadCell className="p-2">Nombre</Table.HeadCell>
                            <Table.HeadCell className="p-2">Responsable</Table.HeadCell>
                            <Table.HeadCell className="p-2">Cantidad</Table.HeadCell>
                            <Table.HeadCell className="p-2">Fecha</Table.HeadCell>
                            <Table.HeadCell className="p-2">Salida</Table.HeadCell>
                            <Table.HeadCell className="p-2">Regreso</Table.HeadCell>
                            <Table.HeadCell className="p-2">Estado</Table.HeadCell>
                            <Table.HeadCell className="p-2">Acción</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y text-base">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-slate-900">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 p-2">
                                    24
                                </Table.Cell>
                                <Table.Cell className="p-2">Sky Gym</Table.Cell>
                                <Table.Cell className="p-2">Julio Paredes Arceo</Table.Cell>
                                <Table.Cell className="p-2">1</Table.Cell>
                                <Table.Cell className="p-2">02/07/2024</Table.Cell>
                                <Table.Cell className="p-2">09:12:33</Table.Cell>
                                <Table.Cell className="p-2">17:45:33</Table.Cell>
                                <Table.Cell className="p-2 text-green-500 font-semibold">Disponible</Table.Cell>
                                <Table.Cell className="p-2 place-content-center">
                                    <Button className="bg-green-500 hover:bg-green-700 pr-4 pl-4 lg:left-12">Prestar</Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}
export default Keys;