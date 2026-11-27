import lighthouse from './assets/lighthouse.svg'
import ground from './assets/ground.png'
import resume from './assets/CindyWuResumeS27.pdf'
import minion from './assets/otto.svg'
import './App.css'


export default function LighthouseScene() {
  return (
    <div className="page">
      <div className="scene">
        <img src={ground} alt="the rocks and the water" className="layer ground-img" />
        <img src={lighthouse} alt="A red and white lighthouse" className="layer lighthouse-img" />
        <img src={minion} alt="minion swimming in the water" className='layer minion-img' />
        {/* water rippling out of the minion? */}

        <div className="screens">
          <section id="top" className="screen">
            <div className="title-block">
              <h1 className="name">cindy wu</h1>
              <nav className="top-links">
                <a href="#menu">info</a>
                <a href={resume} target="_blank" rel="noreferrer">resume</a>
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