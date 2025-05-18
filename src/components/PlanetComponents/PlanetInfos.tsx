import PlanetInfo from "./PlanetInfo"

type Planet = {
    rotation?: string
    revolution?: string
    radius?: string
    temperature?: string
}

type TPlanetInfosProps = {
    planet?: Planet
}


export default function PlanetInfos({ planet }: TPlanetInfosProps) {
    return (
        <>
            <PlanetInfo title="ROTATION TIME" info={planet?.rotation} />
            <PlanetInfo title="REVOLUTION TIME" info={planet?.revolution} />
            <PlanetInfo title="RADIUS" info={planet?.radius} />
            <PlanetInfo title="AVERAGE TEMPERATURE" info={planet?.temperature} />
        </>
    )
}
