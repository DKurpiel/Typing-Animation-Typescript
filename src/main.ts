import Typewriter from "./Typewriter"

import "./style.css"

const typewriter = new Typewriter(document.querySelector(".whitespace") as HTMLDivElement,
  {
    loop: true,
    typingSpeed: 10,
    deletingSpeed: 10,
  }
)

typewriter
  .typeString("Where am I?")
  .pauseFor(1000)
  .typeString("\n\nfunctio")
  .deleteChars(7)
  .typeString("const number = ")
  .pauseFor(150)
  .deleteAll(10)
  .typeString("How do I start?")
  .pauseFor(1000)
  .typeString("\n\nThis is difficult?")
  .pauseFor(1000)
  .typeString("\n\nDoes everyone have the same as me?")
  .pauseFor(1000)
  .deleteAll(10)
  .start()