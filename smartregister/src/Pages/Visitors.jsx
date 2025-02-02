import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import DateV from "../Components/DateV";
import OutVisitor from "../Components/OutVisitor";
import { Table, Button } from "flowbite-react";
import AddVisitor from "../Components/AddVisitor";
import axios from "axios";
import { FolderIcon } from '@heroicons/react/24/outline';


function Visitors() {
    const URI = 'http://localhost:8000/visitors/'

    const [OutModal, setOutModal] = useState(false);
    const [AddVisitorModal, setAddVisitor] = useState(false);
    const [visitors, setVisitors] = useState([]);
    const [activeCount, setActiveCount] = useState(0);
    const [selectedVisitorId, setSelectedVisitorId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        document.title = "Visitantes";
        getVisitors();
        getCounts();
    }, []);

    const getVisitors = async () => {
        const res = await axios.get(URI)
        setVisitors(res.data)
    };
    const searchVisitor = async (query) => {
        try {
            const res = await axios.get(`${URI}search`, { params: { query } });
            setVisitors(Array.isArray(res.data) ? res.data : []);
        } catch (error) {
            console.error("Error searching users:", error);
            setVisitors([]);
        }
    };
    const getCounts = async () => {
        const res = await axios.get(`${URI}count/state`);
        setActiveCount(res.data.activeCount);
    };

    const handleOutClick = (visitorId) => {
        setOutModal(true);
        setSelectedVisitorId(visitorId)
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchVisitor(searchQuery);
    };

    const updatedList = () => {
        getVisitors();
        getCounts();
    };
    return (
        <>
            <Header />
            <DateV activeCount={activeCount} />
            <OutVisitor openmodalOut={OutModal} onClose={setOutModal} updatedList={updatedList} visitorId={selectedVisitorId} />
            <AddVisitor openmodalVisitor={AddVisitorModal} onClose={setAddVisitor} updatedList={updatedList} />
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="grid grid-cols-3 gap-8 sm:mt-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col-reverse">
                        <form className="max-w-md mx-auto w-full lg:ml-40" onSubmit={handleSearchSubmit}>
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
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Nombre,empresa..."
                                    required
                                />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-sky-800 hover:bg-sky-900 font-medium rounded-lg text-sm px-4 py-2">
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col-reverse w-28">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-medium rounded-lg text-sm p-4 w-full max-w-md mx-auto" onClick={() => setAddVisitor(true)}>
                            Agregar
                        </button>
                    </div>
                </dl>
            </div>
            <div className="flex mt-14 ">
                <div className="overflow-x-auto w-5/6 mx-auto">
                    <Table hoverable className="min-w-full text-xs border justify-center text-center">
                        <Table.Head className="text-lg">
                            <Table.HeadCell className="p-2">Nombre</Table.HeadCell>
                            <Table.HeadCell className="p-2">Empresa</Table.HeadCell>
                            <Table.HeadCell className="p-2">Tipo de identificación</Table.HeadCell>
                            <Table.HeadCell className="p-2">Comentarios</Table.HeadCell>
                            <Table.HeadCell className="p-2">Fecha</Table.HeadCell>
                            <Table.HeadCell className="p-2">Entrada</Table.HeadCell>
                            <Table.HeadCell className="p-2">Salida</Table.HeadCell>
                            <Table.HeadCell className="p-2">Estado</Table.HeadCell>
                            <Table.HeadCell className="p-2">Acción</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y text-base">
                            {Array.isArray(visitors) && visitors.length > 0 ? (
                                visitors.map((visitor) => (
                                    <Table.Row key={visitor.id} className="bg-white text-slate-900">
                                        <Table.Cell className="p-2">{visitor.namev}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.company}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.identification}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.comments === "" ? 'N/A' : visitor.comments}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.datetodayv === "" ? 'N/A' : visitor.datetodayv}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.entrancev === "" ? 'N/A' : visitor.entrancev}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.exitv === "" ? 'N/A' : visitor.exitv}</Table.Cell>
                                        <Table.Cell className="p-2">{visitor.statev === false ? 'Fuera' : 'Dentro'}</Table.Cell>
                                        <Table.Cell className="p-2 place-content-center">
                                            {visitor.statev === true ? (
                                                <Button className="bg-red-600 hover:bg-red-700 pr-4 pl-4 lg:left-6" onClick={() => handleOutClick(visitor.id)}>Salida</Button>

                                            ) : (
                                                <FolderIcon className="h-10 w-10 text-sky-800 lg:ml-14 md:ml-8" aria-hidden="true" />

                                            )}
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            ) : (
                                <Table.Row>
                                    <Table.Cell colSpan="10" className="p-2 text-center">
                                        No se encontraron resultados.
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}
export default Visitors;