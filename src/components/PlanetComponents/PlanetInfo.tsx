import Tailwind from "../../shared/Tailwind"

type TPlanetInfo = {
    title:string | undefined
    info:string | undefined
}


export default function PlanetInfo({title, info}:TPlanetInfo) {
    
    const {H4, H2} = Tailwind()
    
    return (
    <div className="border-solid p-[20px_20px_29px_20px] border-[1px] flex flex-col gap-[12px] border-[rgba(255,255,255,0.2)] w-[255px] ">
        <h4 className={`${H4} text-[rgba(255,255,255,0.5)]`}>{title}</h4>
        <h2 className={`${H2}`}>{info}</h2>
    </div>
)
}
