import React, { useState, useEffect } from "react";

export default function DateV({ activeCount }) {
    const today = new Date();
    const todayis = today.toLocaleDateString();
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            setCurrentTime(time);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative isolate overflow-hidden bg-white py-20 sm:py-20 mt-10 text-center justify-center">
            <div className="mx-auto w-3/4 px-6 lg:px-8 text-center justify-center">
                <div className="lg:mx-0">
                    <h2 className="w-full text-4xl font-medium tracking-wide text-black sm:text-6xl text-center">Visitantes</h2>
                </div>
                <div className="mx-auto mt-24 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 lg:grid-cols-3">
                        <div className="flex flex-col-reverse">
                            <dt className="text-xl leading-7 text-black">{activeCount}</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Dentro de la propiedad</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-xl leading-7 text-black">{todayis}</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Fecha</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-xl leading-7 text-black">{currentTime}</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Hora</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}