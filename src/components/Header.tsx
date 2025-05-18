import { Link } from "react-router-dom"

type THeader = {
    Data: { name: string }[]
    H2: string
    H4: string
}



export default function Header({ Data, H2, H4 }: THeader) {
    const colorsObject = {
        Mercury: "#419EBB",
        Venus: "#EDA249",
        Earth: "#6D2ED5",
        Mars: "#D14C32",
        Jupiter: "#D83A34",
        Saturn: "#CD5120",
        Uranus: "#1EC1A2",
        Neptune: "#2D68F0"
    }



    return (
        <header className="w-[100%] items-center justify-center border-solid border-b-[1px] border-b-[rgba(255,255,255,0.2)]  p-[0_50px_0px_50px]! flex">
            <div className="items-center justify-between flex w-[1440px]">
                <h1 className={`${H2} text-[2.8rem]! m-[30px_0_20px_0]!`}>THE PLANETS</h1>
                <nav>
                    <ul className="flex gap-[32px]">
                        {Data.map((e) => {
                            return <Link key={e.name} to={`/planets/${e.name}`}>

                                <li style={{borderTop: colorsObject[e?.name as keyof typeof colorsObject]}} className={`${H4} pt-[26px]! hover:pt-[32px]! h-[100%]! mb-[24px]! border-t-[4px]! border-hidden hover:border-solid! cursor-pointer`}>{e.name.toUpperCase()}</li>
                            </Link>
                        })}
                    </ul>
                </nav>
            </div>
        </header>)
}
