type TPlanetButtonsProps = {
  buttonStyle: string
  states: {
    overview: boolean
    structure: boolean
    geology: boolean
  }
  planetColor: string
  setState: (state: { overview: boolean; structure: boolean; geology: boolean }) => void
  H3: string
}


export default function PlanetButtons({buttonStyle, states, planetColor, setState, H3}:TPlanetButtonsProps) {
    return (
        <div className="flex flex-col max-xl:min-w-[350px]! gap-[20px]">
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
    )
}
