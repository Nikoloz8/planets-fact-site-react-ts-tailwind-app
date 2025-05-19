type TPlanetSection = {
    content: string;
    source: string;
}

type TPlanetData = {
    name: string;
    overview: TPlanetSection
    structure: TPlanetSection
    geology: TPlanetSection
}

type SectionState = { overview: boolean; structure:  boolean; geology:  boolean }


type IPlanetTextProps = {
    states: SectionState
    H1?: string
    P?: string
    planet: TPlanetData | undefined
}

export default function PlanetText({ H1, states, planet, P }: IPlanetTextProps) {
    return (
        <div className="flex flex-col gap-[30px] max-xl:max-w-[350px]!">
            <h1 className={`${H1}`}>{planet?.name}</h1>
            <p className={`${P}`}>{states.overview ? planet?.overview.content : states.structure ? planet?.structure.content : states.geology ? planet?.geology.content : ""}</p>
            <h4 className={`${P} text-[rgba(255,255,255,0.5)]! flex gap-[5px]`}>Source : <span className={`${P} font-[700] flex items-center gap-[10px] text-[rgba(255,255,255,0.7)]!`}><a href={states.overview ? planet?.overview.source : states.structure ? planet?.structure.source : states.geology ? planet?.geology.source : ""} className="underline">Wikipedia</a><img src="/images/icon-source.svg" alt="" /></span></h4>
        </div>)
}
