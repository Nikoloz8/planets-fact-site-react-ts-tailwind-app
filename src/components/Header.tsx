import { Link } from "react-router-dom"

type THeader = {
    Data: { name: string }[]
    H2: string
    H4: string
}



export default function Header({ Data, H2, H4 }: THeader) {
    
    return (
        <header className="w-[100%] items-center justify-center border-solid border-[1px] border-b-[rgba(255,255,255,0.2)]  p-[32px_50px_32px_50px]! flex">
            <div className="items-center justify-between flex w-[1440px]">   
                <h1 className={`${H2} text-[2.8rem]!`}>THE PLANETS</h1>
                <nav>
                    <ul className="flex gap-[32px]">
                        {Data.map((e) => {
                            return <Link key={e.name} to={`/planets/${e.name}`}>
                                <li className={`${H4} cursor-pointer`}>{e.name.toUpperCase()}</li>
                            </Link>
                        })}
                    </ul>
                </nav>
            </div>
        </header>)
}
