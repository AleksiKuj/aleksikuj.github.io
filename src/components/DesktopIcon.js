const DesktopIcon = ({ imageSrc, text, link }) => {
  return (
    <div className="flex flex-col items-center p-2">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imageSrc} alt={text} width="40px" />
      </a>
      <p className="text-white">{text}</p>
    </div>
  )
}
export default DesktopIcon
