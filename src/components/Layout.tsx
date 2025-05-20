import Tailwind from "../shared/Tailwind"
import Data from "../../data.json"
import Header from "./Header"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"


export default function Layout() {
    const { H4, H2 } = Tailwind()

    const names: string[] = []

    let path = location.pathname
    const navigate = useNavigate()

    useEffect(() => {
        for (let i = 0; i < Data.length; i++) {
            names.push(Data[i].name)
        }

        if (names.includes(path.slice(1))) {
            navigate(`/${path.slice(1)}`)
        } else {

            navigate("/Earth")
        }
    }, [])

    return (
        <div className="min-w-[100vw] min-h-[100vh] bg-[#070724] bg-[url('/images/background-stars.svg')] bg-cover bg-center">
            <Header Data={Data} H2={H2} H4={H4} />
            <Outlet />
        </div>

    )
}
