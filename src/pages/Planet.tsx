import { useParams } from "react-router-dom"
import Data from "../../data.json"
import Tailwind from "../shared/Tailwind"
import { useState } from "react"
import PlanetText from "../components/PlanetComponents/PlanetText"
import PlanetButtons from "../components/PlanetComponents/PlanetButtons"
import PlanetInfos from "../components/PlanetComponents/PlanetInfos"
import PlanetImage from "../components/PlanetComponents/PlanetImage"

export default function Planet() {

  const { H1, P, H3, buttonStyle } = Tailwind()
  const { planetName } = useParams()

  const planet = Data.find((planet) => planet.name === planetName)


  const [states, setState] = useState<{
    overview:boolean,
    structure:boolean,
    geology:boolean
  }>({
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
        <div className="flex w-[1440px] max-xl:flex-col p-[0_100px_0_100px]! justify-between">
          <PlanetImage planet={planet} states={states} />
          <div className="max-w-[350px] max-xl:p-[0_100px_50px_100px]! max-xl:max-w-[100%]!  m-[150px_0_0_100px]! max-xl:m-0!">
            <div className="flex flex-col gap-[30px] max-xl:justify-between max-xl:flex-row">
              <PlanetText states={states} H1={H1} P={P} planet={planet} />
              <PlanetButtons buttonStyle={buttonStyle} states={states} planetColor={planetColor} setState={setState} H3={H3} />
            </div>
          </div>
        </div>
        <div className="max-xl:w-[1240px]! flex p-[0_100px_30px_100px]! w-[1440px] items-center justify-between gap-[24px]">
          <PlanetInfos planet={planet} />
        </div>
      </div >
    </>
  )
}
