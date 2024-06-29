import React, { useEffect } from "react";
import Header from "../Components/Header";
import { Table, Button } from "flowbite-react";

function Collegue() {
    useEffect(() => {
        document.title = "Colaboradores";
    }, []);
    return (
        <>
            <Header />
            <p class="font-sans text-5xl flex justify-center mt-10 font-medium tracking-wide">Colaboradores</p>
            <form class="max-w-md mx-auto mt-24 ml-40">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Colaborador..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-sky-800 hover:bg-sky-900 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
                </div>
            </form>

            <div className="flex justify-center mt-14">
                <div className="overflow-x-auto w-5/6 mx-auto">
                    <Table hoverable className="min-w-full text-xs">
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
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Collegue;