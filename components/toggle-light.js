import React from "react"

export default function ToogleLight() {
  const [isLightMode, setIsLightMode] = React.useState(false);
  const onToogleLightMode = () => {
    document.documentElement.classList.toggle("light-mode");
    setIsLightMode(document.documentElement.classList.contains("light-mode"));
  }

  return <div onClick={onToogleLightMode} className="absolute top-12 w-8 h-4 bg-opink rounded-lg cursor-pointer ">
    <div className={`transition-all	rounded-full bg-owhite w-4 h-4 ${isLightMode && 'ml-4'}`} />
    </div>
}
