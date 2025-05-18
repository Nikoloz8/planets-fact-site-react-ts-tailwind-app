import { useParams } from "react-router-dom"
import Data from "../../data.json"
import PlanetInfo from "../components/PlanetComponents/PlanetInfo"
import Tailwind from "../shared/Tailwind"
import { useState } from "react"

export default function Planet() {

  const { H1, P, H3, buttonStyle } = Tailwind()

  const { planetName } = useParams()
  const planet = Data.find((planet) => planet.name === planetName)

  const [states, setState] = useState({
    overview: true,
    structure: false,
    geology: false
  })

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


  const planetColor = colorsObject[planet?.name as keyof typeof colorsObject];

  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <div className="flex w-[1440px] p-[0_100px_0_100px]! justify-between">
          <div className="w-[100%]! flex items-center justify-center">
            <div className="relative h-[700px]! min-w-[700px] flex items-center justify-center">
              <img src={states.structure ? planet?.images.internal : planet?.images.planet} className="block" alt="" />
              {states.geology ? <img src={planet?.images.geology} className="absolute bottom-[5%] left-[38.34%] w-[163px]!" alt="" /> : null}
            </div>
          </div>
          <div className="max-w-[350px] m-[150px_0_0_100px]!">
            <div className="flex flex-col gap-[30px]">
              <h1 className={`${H1}`}>{planet?.name}</h1>
              <p className={`${P}`}>{states.overview ? planet?.overview.content : states.structure ? planet?.structure.content : states.geology ? planet?.geology.content : ""}</p>
              <h4 className={`${P} text-[rgba(255,255,255,0.5)]! flex gap-[5px]`}>Source : <span className={`${P} font-[700] flex items-center gap-[10px] text-[rgba(255,255,255,0.7)]!`}><a href={states.overview ? planet?.overview.source : states.structure ? planet?.structure.source : states.geology ? planet?.geology.source : ""} className="underline">Wikipedia</a><img src="/images/icon-source.svg" alt="" /></span></h4>
              <div className="flex flex-col gap-[20px]">
                <button className={`${buttonStyle}`} style={states.overview ? { backgroundColor: planetColor } : undefined} onClick={() => {
                  setState({ structure: false, geology: false, overview: true })
                }}><span className={`${H3} text-[rgba(255,255,255,0.5)]!`}>01</span>Overview</button>
                <button className={`${buttonStyle}`} style={states.structure ? { backgroundColor: planetColor } : undefined} onClick={() => {
                  setState({ structure: true, geology: false, overview: false })
                }}><span className={`${H3} text-[rgba(255,255,255,0.5)]!`}>02</span>Structure</button>
                <button style={states.geology ? { backgroundColor: planetColor } : undefined} onClick={() => {
                  setState({ structure: false, geology: true, overview: false })
                }} className={`${buttonStyle}`}><span className={`${H3} text-[rgba(255,255,255,0.5)]!`}>03</span>Geology</button>
              </div>
            </div>
          </div>

        </div>
        <div className="flex p-[0_100px_30px_100px]! w-[1440px] items-center justify-between gap-[24px]">
          <PlanetInfo title="ROTATION TIME" info={planet?.rotation} />
          <PlanetInfo title="REVOLUTION TIME" info={planet?.revolution} />
          <PlanetInfo title="RADIUS" info={planet?.radius} />
          <PlanetInfo title="AVERAGE TEMPERATURE" info={planet?.temperature} />
        </div>
      </div >
    </>
  )
}
