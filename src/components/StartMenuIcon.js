import Triangle from "../assets/triangle.png"
const StartMenuIcon = ({ imageSrc, text, onClick, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="flex flex-row p-1 w-full hover:bg-darkGrey cursor-pointer"
        onClick={onClick}
      >
        <img src={imageSrc} alt={text} width="55" height="50" />
        <div className="text-black self-center px-2 w-full">
          <p className="inline">
            <span className="underline"> {text[0]}</span>
            <span>{text.slice(1)}</span>
            <img
              src={Triangle}
              alt={text}
              className="w-1/12 float-right rotate-90 my-1"
            />
          </p>
        </div>
      </div>
    </a>
  )
}
export default StartMenuIcon
