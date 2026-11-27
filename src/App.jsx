import lighthouse from './assets/lighthouse.svg'
import ground from './assets/ground.png'
import './App.css'


export default function LighthouseScene() {
  return (
    <div className="page">
      <div className="scene">
        <img src={ground} alt="the rocks and the water" className="layer ground-img" />
        <img src={lighthouse} alt="A red and white lighthouse" className="layer lighthouse-img" />

        <div className="screens">
          <section id="top" className="screen">
            <div className="title-block">
              <h1 className="name">cindy wu</h1>
              <nav className="top-links">
                <a href="#menu">info</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">resume</a>
              </nav>
            </div>
          </section>

          <section id="menu" className="screen">
            <nav className="main-links">
              <a href="#about">about</a>
              <a href="#experiences">experiences</a>
              <a href="#projects">projects</a>
            </nav>
          </section>

          <section id="thanks" className="screen">
            <p className="thanks">thank you!</p>
          </section>
        </div>
      </div>
    </div>
  )
}