import StartMenuIcon from "./StartMenuIcon"

import { useEffect, useRef, useState } from "react"
const StartMenu = ({ startMenu, setStartMenu, showModal, setShowModal }) => {
  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      startMenu ? setStartMenu(false) : console.log("menu not open")
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="h-96 bg-lightGrey w-80 flex flex-row border-2 border-white border-r-darkGrey border-b-darkGrey z-30"
    >
      <div className="basis-1/6 bg-darkBlue w-5">
        <div className="flex flex-col justify-end text-white text-xs z-50 float-bottom h-full w-full">
          <span className="-rotate-90 mb-6 text-2xl uppercase w-full">
            windows<span className="font-bold">98</span>
          </span>
        </div>
      </div>
      <div className="basis-5/6">
        <div className="flex flex-col mt-4">
          <StartMenuIcon
            imageSrc={require("../assets/clock.png")}
            text="Study timer"
            onClick={() => setShowModal(true)}
          />
          <StartMenuIcon
            imageSrc={require("../assets/steam.png")}
            link="https://github.com/AleksiKuj/steam-game-picker"
            text="Steam Game Picker"
          />
          <StartMenuIcon
            imageSrc={require("../assets/fire.png")}
            link="https://github.com/AleksiKuj/yelpcamp"
            text="YelpCamp"
          />
          <StartMenuIcon
            imageSrc={require("../assets/paint.webp")}
            link="https://github.com/AleksiKuj/color-palette-generator"
            text="Color Generator"
          />
          <StartMenuIcon
            imageSrc={require("../assets/pokeball.png")}
            link="https://github.com/AleksiKuj/pokedex"
            text="Pokedex"
          />
        </div>
      </div>
    </div>
  )
}

export default StartMenu
