import { useState, useEffect } from "react"

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [time, setTime] = useState(25 * 60)
  const [isBreakMode, setIsBreakMode] = useState(false)
  const [breakTime, setBreakTime] = useState(5 * 60)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (play) {
      const intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft === 0) {
            clearInterval(intervalId)
            return 0
          }
          return timeLeft - 1
        })
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [play])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const togglePlay = () => setPlay(!play)

  const resetTime = () => {
    if (!isBreakMode) {
      setTimeLeft(time)
    }
    if (isBreakMode) {
      setTimeLeft(breakTime)
    }
    setPlay(false)
  }
  const switchMode = (mode) => {
    if (mode === "break") {
      setIsBreakMode(true)
      setTimeLeft(breakTime)
    }
    if (mode === "pomodoro") {
      setIsBreakMode(false)
      setTimeLeft(time)
    }
    setPlay(false)
  }

  return (
    <div>
      <div className="flex flex-col">
        <p>Timer</p>
        <p>
          Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <div>
          <button onClick={togglePlay} className="px-2 border border-black ">
            {play ? "Stop" : "Start"}
          </button>
          <button onClick={resetTime} className="px-2 border border-black ">
            Reset
          </button>

          {!isBreakMode ? (
            <button
              onClick={() => switchMode("break")}
              className="px-2 border border-black "
            >
              Short break
            </button>
          ) : (
            <button
              onClick={() => switchMode("pomodoro")}
              className="px-2 border border-black "
            >
              Pomodoro
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timer
