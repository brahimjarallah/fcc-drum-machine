import React, { Component } from "react"
export default class DrumPad extends Component {
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener("keydown", this.handleKeydown)
    window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  }
  handleKeydown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
  handleClick = () => {
    this.audio.play()
    this.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <p>{this.props.letter}</p>
        <audio
          className="clip"
          ref={(ref) => (this.audio = ref)}
          src={this.props.src}
          id={this.props.letter}
        ></audio>
      </div>
    )
  }
}
