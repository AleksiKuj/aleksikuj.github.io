import { useEffect, useState } from "react"

const Taskbar = ({ setStartMenu, startMenu }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 20000)
  }, [])

  const time = () => {
    const hours = date.getHours().toString()
    const minutes = date.getMinutes().toString()

    return <p>{`${hours}:${minutes.length !== 1 ? minutes : `0${minutes}`}`}</p>
  }

  return (
    <div className="h-10 bg-lightGrey border-t border-t-white">
      <div className="flex flex-row h-full items-center ml-1">
        {/* start button */}
        <div
          className="border-t-2 border-t-white border-l-2 border-l-white
           border-2 border-darkGrey border-darkGrey p-1 shadow-2xl cursor-pointer"
          onClick={() => setStartMenu(!startMenu)}
        >
          <img
            src={require("../assets/start-button.png")}
            alt="start button"
            width="60px"
          />
        </div>
        <div className="w-full flex justify-end mr-2">
          <div className="border-2 border-darkGrey px-5">{time()}</div>
        </div>
      </div>
    </div>
  )
}

export default Taskbar
