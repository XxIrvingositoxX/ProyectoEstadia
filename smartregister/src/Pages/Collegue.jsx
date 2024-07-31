import React, { useEffect, useId, useState } from "react";
import Header from "../Components/Header";
import Date from "../Components/Date";
import { Table, Button } from "flowbite-react";
import InModal from "../Components/InModal";
import OutModal from "../Components/OutModal";
import axios from "axios";

function Collegue() {
    const URI = 'http://localhost:8000/colleagues/'
    useEffect(() => {
        document.title = "Colaboradores";
        getColleagues();
        getCounts();
    }, []);
    const [ModalIn, setModalIn] = useState(false);
    const [ModalOut, setModalOut] = useState(false);
    const [colleagues, setColleagues] = useState([]);
    const [isIn, setIsIn] = useState(true);
    const [selectedColleagueId, setSelectedColleagueId] = useState(null);
    const [activeCount, setActiveCount] = useState(0);
    const [inactiveCount, setInactiveCount] = useState(0);

    const getColleagues = async () => {
        const res = await axios.get(URI)
        setColleagues(res.data)
    };

    const getCounts = async () => {
        const res = await axios.get(`${URI}count/state`);
        setActiveCount(res.data.activeCount);
        setInactiveCount(res.data.inactiveCount);
    };

    const handleInClick = (colleagueId) => {
        setIsIn(false);
        setModalIn(true);
        setSelectedColleagueId(colleagueId)
    };

    const handleOutClick = (colleagueId) => {
        setIsIn(true);
        setModalOut(true);
        setSelectedColleagueId(colleagueId)
    };

    const updatedList = () => {
        getColleagues();
        getCounts();
    }
    return (
        <>
            <Header />
            <Date activeCount={activeCount} inactiveCount={inactiveCount} />
            <InModal openmodalIn={ModalIn} onClose={() => setModalIn(false)} colleagueId={selectedColleagueId} updatedList={updatedList} />
            <OutModal openmodalOut={ModalOut} onClose={() => setModalOut(false)} colleagueId={selectedColleagueId} updatedList={updatedList} />
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
                                <option defaultValue="Ama de llaves">Ama de Llaves</option>
                                <option value="publicas">Áreas Públicas</option>
                                <option value="ayb">Alimentos & Bebidas</option>
                                <option value="bares">Bares</option>
                                <option value="bellBoys">Bell Boys</option>
                                <option value="bodas">Bodas</option>
                                <option value="cocina">Cocina</option>
                                <option value="contraloria">Contraloría</option>
                                <option value="entretenimiento">Entretenimiento</option>
                                <option value="gerencia">Gerencia General</option>
                                <option value="mantenimiento">Mantenimiento</option>
                                <option value="mod">MOD</option>
                                <option value="prevencion">Prevención</option>
                                <option value="recepcion">Recepción</option>
                                <option value="sociales">Redes Sociales</option>
                                <option value="room">Room Service</option>
                                <option value="rh">Recursos Humanos</option>
                                <option value="sistemas">Sistemas</option>
                                <option value="spa">Spa</option>
                                <option value="steward">Steward</option>
                                <option value="ventas">Ventas</option>
                                <option value="welcome">Welcome Ambassador</option>
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
                            <Table.HeadCell className="p-2">Fecha de entrada</Table.HeadCell>
                            <Table.HeadCell className="p-2">Fecha de salida</Table.HeadCell>
                            <Table.HeadCell className="p-2">Entrada</Table.HeadCell>
                            <Table.HeadCell className="p-2">Salida</Table.HeadCell>
                            <Table.HeadCell className="p-2">Estado</Table.HeadCell>
                            <Table.HeadCell className="p-2">Acción</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y text-base">
                            {colleagues.map((colleague) => (
                                <Table.Row key={colleague.id} className="bg-white text-slate-900">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 p-2">
                                        {colleague.nocolleaguec}
                                    </Table.Cell>
                                    <Table.Cell className="p-2">{colleague.namec}</Table.Cell>
                                    <Table.Cell className="p-2">{colleague.departmentc}</Table.Cell>
                                    <Table.Cell className="p-2">{colleague.datetodayc === "" ? 'N/A' : colleague.datetodayc}</Table.Cell>
                                    <Table.Cell className="p-2">{colleague.datetodayexitc === "" ? 'N/A' : colleague.datetodayexitc}</Table.Cell>
                                    <Table.Cell className="p-2">{colleague.entrancec === "" ? 'N/A' : colleague.entrancec}</Table.Cell>
                                    <Table.Cell className="p-2">{colleague.exitc === "" ? 'N/A' : colleague.exitc}</Table.Cell>
                                    <Table.Cell className="p-2">{colleague.state === false ? 'Fuera' : 'Dentro'}</Table.Cell>
                                    <Table.Cell className="p-2 place-content-center">
                                        {colleague.state === false ? (
                                            <Button className="bg-green-500 hover:bg-green-700 pr-2 pl-3 lg:left-8 text-center" onClick={() => handleInClick(colleague.id)}>
                                                Entrada
                                            </Button>
                                        ) : (
                                            <Button className="bg-red-600 hover:bg-red-700 pr-4 pl-4 lg:left-8" onClick={() => handleOutClick(colleague.id)}>
                                                Salida
                                            </Button>
                                        )}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}
export default Collegue;