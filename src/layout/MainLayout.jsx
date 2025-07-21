import { useState } from "react"
import { NavBar } from "../components/NavBar";
import { pages } from "../utils/pages";
import { Route, Routes } from "react-router";

export const MainLayout = () => {
    const [activePage, setActivePage] = useState("landing");

    return (
        <>
            <NavBar activePage={activePage} setActivePage={setActivePage} />
            <Routes>
                {pages.map((page) => (
                    <Route path={page.route} element={page.component} />
                ))}
            </Routes>
        </>
    )
}