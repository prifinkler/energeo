import team from '../assets/team.png'

export default function About() {
  return (
    <>
      <div className="mb-5 text-center">
        <h2>About</h2>
        <p>EnerGeo is a React-based web application that visualises real-time energy sourcing and environmental impact data. Built during a hackathon under the theme "Earth, Fire, Air, Water and Air - Where Does our Energy Comes From?", this project aims to promote sustainable practices and environmental awareness through interactive data visualisations.</p>
      </div>
      <div className='team row mb-5 text-center'>
        <div className='col'>
          <img src={team} alt="Team photo" />
        </div>
        <div className="col">
          <h3>Team</h3>
          <p>Data Scientists:</p>
          <p><a href="https://www.linkedin.com/in/aryavachin/">Aryavachin Márquez Briceño</a></p>
          <p><a href="https://www.linkedin.com/in/louis-auger-data-london/">Louis Auger</a></p>
          <p>Frontend Developer:</p>
          <p><a href="https://www.linkedin.com/in/priscilafinkler/">Priscila Finkler Innocente</a></p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <h3>GitHub Repositories</h3>
          <p><a href="https://github.com/prifinkler/energeo">Frontend</a></p>
          <p><a href="https://github.com/JammyNinja/EnerGeo_API">Backend</a></p>
        </div>
        <div className="col">
          <h3>Data Sources</h3>
          <p><a href="https://bmrs.elexon.co.uk/api-documentation/endpoint/generation/outturn/current">Elexon</a></p>
          <p><a href="https://api.carbonintensity.org.uk/">Carbon Intensity</a></p>
        </div>
      </div>

    </>

  )
}
