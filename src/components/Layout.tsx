import Tailwind from "../shared/Tailwind"
import Data from "../../data.json"
import Header from "./Header"
import { Outlet } from "react-router-dom"


export default function Layout() {

    const { H4, H2 } = Tailwind()


    return (
        <div className="min-w-[100vw] min-h-[100vh] bg-[#070724] bg-[url('/images/background-stars.svg')] bg-cover bg-center">
            <Header Data={Data} H2={H2} H4={H4} />
            <Outlet />
        </div>

    )
}
