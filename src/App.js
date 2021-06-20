import React, { Component } from "react"
import DrumPad from "./components/DrumPad"

const data = [
  {
    id: "snare",
    letter: "Q",
    src: "https://www.myinstants.com/media/sounds/snare.mp3",
    color: "#16a085",
  },
  {
    id: "bass 1",
    letter: "W",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3",
    color: "#27ae60",
  },
  {
    id: "bongo",
    letter: "E",
    src: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav",
    color: "#2c3e50",
  },
  {
    id: "tom tom",
    letter: "A",
    src: "http://www.denhaku.com/r_box/tr707/closed.wav",
    color: "#f39c12",
  },
  {
    id: "bass 3",
    letter: "S",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3",
    color: "#e74c3c",
  },
  {
    id: "shotgun",
    letter: "D",
    src: "http://david.guerrero.free.fr/Effects/ShotgunReload.wav",
    color: "#9b59b6",
  },
  {
    id: "high hat",
    letter: "Z",
    src: "http://www.denhaku.com/r_box/tr707/closed.wav",
    color: "#FB6964",
  },
  {
    id: "drum hit",
    letter: "X",
    src: "https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3",
    color: "#342224",
  },
  {
    id: "laser",
    letter: "C",
    src: "http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav",
    color: "#472E32",
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  handleDisplay = (display) => {
    this.setState({display})
  }
  render() {
    return (
      <div className="drum-machine">
        <div id="display">{this.state.display}</div>
        {data.map((d) => (
          <DrumPad
            id={d.id}
            letter={d.letter}
            src={d.src}
            key={d.id}
            sytle={{ backgroundColor: d.color }}
            handleDisplay={this.handleDisplay}
          />
        ))}
      </div>
    )
  }
}

export default App
