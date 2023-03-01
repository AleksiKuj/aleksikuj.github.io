import Taskbar from "./components/Taskbar"
import DesktopIcon from "./components/DesktopIcon"
import StartMenu from "./components/StartMenu"
import Modal from "./components/Modal"
import Timer from "./components/Timer"
import { useState } from "react"

function App() {
  const [startMenu, setStartMenu] = useState(true)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="max-h-screen min-h-screen flex flex-col bg-teal">
      <div className="flex flex-grow">
        <div className="flex flex-col flex-wrap">
          <DesktopIcon
            imageSrc={require("./assets/steam.png")}
            link="https://github.com/AleksiKuj/steam-game-picker"
            text="Steam Game Picker"
          />
          <DesktopIcon
            imageSrc={require("./assets/fire.png")}
            link="https://github.com/AleksiKuj/yelpcamp"
            text="YelpCamp"
          />
          <DesktopIcon
            imageSrc={require("./assets/paint.webp")}
            link="https://github.com/AleksiKuj/color-palette-generator"
            text="Color Generator"
          />
          <DesktopIcon
            imageSrc={require("./assets/pokeball.png")}
            link="https://github.com/AleksiKuj/pokedex"
            text="Pokedex"
          />

          <DesktopIcon
            imageSrc={require("./assets/calendar.png")}
            link="https://github.com/AleksiKuj/fullstack-todo"
            text="Fullstack Todo"
          />
          <DesktopIcon
            imageSrc={require("./assets/league.png")}
            link="https://github.com/AleksiKuj/LeagueRandomizer"
            text="League Randomizer"
          />
        </div>
        <Modal
          modalComponent={<Timer />}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      {startMenu ? (
        <StartMenu
          startMenu={startMenu}
          setStartMenu={setStartMenu}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        ""
      )}
      <Taskbar setStartMenu={setStartMenu} startMenu={startMenu} />
    </div>
  )
}

export default App
