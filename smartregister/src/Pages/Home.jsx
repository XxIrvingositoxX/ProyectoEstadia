import React, { useEffect } from "react";
import Header from "../Components/Header";

function Home() {
    useEffect(() => {
        document.title="Inicio";
    }, []);
    return (
        <Header />
    )
}
export default Home;