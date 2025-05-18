type PlanetImages = {
    internal: string
    planet: string
    geology: string
}

type Planet = {
    images: PlanetImages
}

type PlanetImageProps = {
    planet?: Planet
    states: {
        structure: boolean
        geology: boolean
    }
}

export default function PlanetImage({ planet, states }: PlanetImageProps) {
    return (
        <div className="w-[100%]! flex items-center justify-center">

            <div className="relative h-[700px]! min-w-[700px] flex items-center justify-center">
                <img
                    src={states.structure ? planet?.images.internal : planet?.images.planet}
                    className="block"
                    alt=""
                />
                {states.geology ? (
                    <img
                        src={planet?.images.geology}
                        className="absolute bottom-[5%] left-[38.34%] w-[163px]!"
                        alt=""
                    />
                ) : null}
            </div>
        </div>
    )
}
