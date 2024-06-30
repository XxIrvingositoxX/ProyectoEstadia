import React, { useEffect } from "react";
import Header from "../Components/Header";
import Date from "../Components/Date";
import { Table, Button } from "flowbite-react";

function Collegue() {
    useEffect(() => {
        document.title = "Colaboradores";
    }, []);
    return (
        <>
            <Header />
            <Date />
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="grid grid-cols-2 gap-8 sm:mt-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse ">
                        <form className="max-w-md mx-auto w-full lg:ml-40">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
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
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Selecciona una opción
                            </label>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form>
                    </div>
                </dl>
            </div>
            <div className="flex justify-center text-center mt-14 ">
                <div className="overflow-x-auto w-5/6 mx-auto">
                    <Table hoverable className="min-w-full text-xs border">
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-2">
                                    12332
                                </Table.Cell>
                                <Table.Cell className="p-2">Gerardo Gomez Palacios</Table.Cell>
                                <Table.Cell className="p-2">Ama de llaves</Table.Cell>
                                <Table.Cell className="p-2">29/06/2024</Table.Cell>
                                <Table.Cell className="p-2">10:24:23</Table.Cell>
                                <Table.Cell className="p-2">6:22:32</Table.Cell>
                                <Table.Cell className="p-2">Fuera</Table.Cell>
                                <Table.Cell className="p-2">
                                    <Button className="bg-green-500 hover:bg-green-700 pr-4 pl-4">Entrada</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-2">
                                    12332
                                </Table.Cell>
                                <Table.Cell className="p-2">Gerardo Gomez Palacios</Table.Cell>
                                <Table.Cell className="p-2">Ama de llaves</Table.Cell>
                                <Table.Cell className="p-2">29/06/2024</Table.Cell>
                                <Table.Cell className="p-2">10:24:23</Table.Cell>
                                <Table.Cell className="p-2">6:22:32</Table.Cell>
                                <Table.Cell className="p-2">Dentro</Table.Cell>
                                <Table.Cell className="p-2">
                                    <Button className="bg-red-700 hover:bg-red-800 pr-5 pl-5">Salida</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-2">
                                    12332
                                </Table.Cell>
                                <Table.Cell className="p-2">Gerardo Gomez Palacios</Table.Cell>
                                <Table.Cell className="p-2">Ama de llaves</Table.Cell>
                                <Table.Cell className="p-2">29/06/2024</Table.Cell>
                                <Table.Cell className="p-2">10:24:23</Table.Cell>
                                <Table.Cell className="p-2">6:22:32</Table.Cell>
                                <Table.Cell className="p-2">Fuera</Table.Cell>
                                <Table.Cell className="p-2">
                                    <Button className="bg-green-500 hover:bg-green-700 pr-4 pl-4">Entrada</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-2">
                                    12332
                                </Table.Cell>
                                <Table.Cell className="p-2">Gerardo Gomez Palacios</Table.Cell>
                                <Table.Cell className="p-2">Ama de llaves</Table.Cell>
                                <Table.Cell className="p-2">29/06/2024</Table.Cell>
                                <Table.Cell className="p-2">10:24:23</Table.Cell>
                                <Table.Cell className="p-2">6:22:32</Table.Cell>
                                <Table.Cell className="p-2">Fuera</Table.Cell>
                                <Table.Cell className="p-2">
                                    <Button className="bg-green-500 hover:bg-green-700 pr-4 pl-4">Entrada</Button>
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