import React from "react"
import useSound from "use-sound"
import mySound from "../public/paradies123.mp3"

function App() {
   const ref1 = React.useRef<any>()
   const [playSound] = useSound(mySound)
   const [showJeff, setshowJeff] = React.useState<Boolean>(false)

   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
   const handlePlay = () => {
      // ref1.current.play()
      if (!isMobile) {
         ref1.current.requestFullscreen()
      }
      playSound()
      setshowJeff(true)
   }

   return (
      <div
         ref={ref1}
         className="App"
         style={{
            height: "100vh",
            width: "100vw",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            position: "relative",
         }}
      >
         <div
            className="paradies"
            style={{
               backgroundImage: 'url("paradies.gif")',
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               backgroundSize: "cover",
               pointerEvents: "none",
               position: "fixed",
               backgroundColor: "#000000",
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               width: "100vw",
               height: "100vh",
               display: showJeff ? "block" : "none",
               objectFit: "cover",
            }}
         ></div>

         {!showJeff && (
            <div className="bubble" onClick={handlePlay}>
               <div className="clickMe"></div>
            </div>
         )}
      </div>
   )
}

export default App
