import lighthouse from './assets/lighthouse.svg'
import ground from './assets/ground.png'
import './App.css'


export default function LighthouseScene() {
  return (
    <div className="page">
      <div className="scene">
        <img src={ground} alt="the rocks and the water" className="layer ground-img" />

        <img src={lighthouse} alt="A red and white lighthouse" className="layer lighthouse-img" />

        <div className="text">
          <h1 className="name">cindy wu</h1>
          <nav className="top-links">
            <a href="#info">info</a>
            <a href="#resume">resume</a>
          </nav>
          <nav className="main-links">
            <a href="#about">about</a>
            <a href="#experiences">experiences</a>
            <a href="#projects">projects</a>
          </nav>
          <p className="thanks">thank you!</p>
        </div>
      </div>
    </div>
  )
}