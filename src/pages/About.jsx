import team from "../assets/team.png";

const AboutSection = ({ children }) => (
  <div className="about-cards-bg h-100 d-flex flex-column align-items-center justify-content-center">
    {children}
  </div>
);

const DataSourceCard = ({ title, children }) => (
  <div className="about-cards-bg h-100">
    <h5>{title}</h5>
    {children}
  </div>
);

export default function About() {
  return (
    <>
      <h2 className="mb-4 text-center">About</h2>
      <div className="mb-4">
        <p>EnerGeo is a React-based web application designed to visualise real-time energy sourcing and environmental impact data. Our goal is to promote sustainable practices and raise awareness through interactive graphs and images. EnerGeo was developed during a hackathon themed <i>&quot;Earth, Fire, Air, Water - Where does our energy come from?&quot;</i>. By integrating MLOps, Cloud, and AI technologies, EnerGeo channels data from various APIs and leverages advanced LLM-based technologies.</p>
        <p>We aspire to provide users with a comprehensive tool that facilitates a direct and easier understanding of the environmental impact of energy sources, and our unique take is classifying them into the four aforementioned elements. Currently EnerGeo offers visualizations of historical consumption levels in the UK (last 30 minutes and last 24 hours) and features an AI image generator that provides real-time visualizations of weather conditions in any location around the world.</p>
      </div>

      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 col-12 mb-3 d-flex justify-content-center align-items-center team">
          <img src={team} alt="Team photo" />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3">
          <AboutSection>
            <h3>Team</h3>
            <div className="mb-3">
              <h4>Data Scientists:</h4>
              <p><a href="https://www.linkedin.com/in/aryavachin/" target="_blank">Aryavachin Márquez Briceño</a></p>
              <p><a href="https://www.linkedin.com/in/louis-auger-data-london/" target="_blank">Louis Auger</a></p>
            </div>
            <div>
              <h4>Frontend Developer:</h4>
              <p><a href="https://www.linkedin.com/in/priscilafinkler/" target="_blank">Priscila Finkler Innocente</a></p>
            </div>
          </AboutSection>
        </div>
        <div className="col-lg-4 col-12 mb-3">
          <AboutSection>
            <h3>GitHub Repositories</h3>
            <p><a href="https://github.com/prifinkler/energeo" target="_blank">Frontend</a></p>
            <p><a href="https://github.com/JammyNinja/EnerGeo_API" target="_blank">Backend</a></p>
          </AboutSection>
        </div>
      </div>

      <h3 className="text-center mb-4">Data Sources</h3>
      <div className="about-cards-bg mb-4">
        <h4 className="mb-3 text-center">Live Data</h4>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mb-4 px-2">
            <DataSourceCard title="Current UK energy generation">
              <p>Elexon provide an API that offers data about the UK energy network.</p>
              <p><a href="https://bmrs.elexon.co.uk/api-documentation/introduction" target="_blank">Elexon API docs</a></p>
              <p><a href="https://data.elexon.co.uk/bmrs/api/v1/generation/actual/per-type/day-total?format=json" target="_blank">Endpoint in use</a></p>
            </DataSourceCard>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 px-2">
            <DataSourceCard title="Carbon intensity">
              <p>The <a href="https://carbonintensity.org.uk/" target="_blank">carbon intensity</a> forecast API is made by National Grid ESO, in partnership with the Environmental Defense Fund Europe, University of Oxford, and WWF.</p>
              <p><a href="https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v2-0-0" target="_blank">Carbon Intensity API docs</a></p>
              <p><a href="https://api.carbonintensity.org.uk/regional" target="_blank">Endpoint in use</a></p>
              <p><a href="https://github.com/carbon-intensity/methodology/raw/master/Regional%20Carbon%20Intensity%20Forecast%20Methodology.pdf" target="_blank">Carbon intensity regional forecast methodology PDF</a></p>
            </DataSourceCard>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 px-2">
            <DataSourceCard title="Solar generation">
              <p>We use solar energy generation forecast data provided by <a href="https://www.solar.sheffield.ac.uk/" target="_blank">University of Sheffield solar</a>. We get solar generation forecast by PES region.</p>
              <p><a href="https://api.solar.sheffield.ac.uk/pvlive/docs" target="_blank">API documentation</a></p>
              <p><a href="https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0" target="_blank">PI endpoint for national solar output</a></p>
            </DataSourceCard>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 px-2">
            <DataSourceCard title="Weather Data">
              <p>We query a free <a href="https://www.weatherapi.com/" target="_blank">weather API</a> for current weather data in a specified location.</p>
            </DataSourceCard>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="about-cards-bg h-100">
            <h4 className="mb-3 text-center">Static Data</h4>
              <div className="row">
                <div className="col-md-6 col-12 mb-4 px-2">
                  <DataSourceCard title="Historic energy generation data">
                    <p>We downloaded a publicly available file from National Grid ESO&apos;s <a href="https://www.nationalgrideso.com/data-portal" target="_blank">data portal</a>. Contains data up to 17th July 2024. Find link to current document below.</p>
                    <p><a href="https://www.nationalgrideso.com/data-portal/historic-generation-mix" target="_blank">Historic data page</a></p>
                    <p><a href="https://api.nationalgrideso.com/dataset/88313ae5-94e4-4ddc-a790-593554d8c6b9/resource/f93d1835-75bc-43e5-84ad-12472b180a98/download/df_fuel_ckan.csv" target="_blank">Historical data file download</a></p>
                  </DataSourceCard>
                </div>
                <div className="col-md-6 col-12 mb-4 px-2">
                  <DataSourceCard title="UK Energy Regions">
                    <p>Also from national grid data portal is a GeoJSON file that contains the coordinates of UK regions. We use regions current at May 2024.</p>
                    <p><a href="https://www.nationalgrideso.com/data-portal/gis-boundaries-gb-dno-license-areas">Region boundaries page</a></p>
                    <p><a href="https://api.nationalgrideso.com/dataset/0e377f16-95e9-4c15-a1fc-49e06a39cfa0/resource/1c6a7dc0-1b6c-443a-bc67-5f7125649434/download/gb-dno-license-areas-20240503-as-geojson.geojson">GeoJSON file download</a></p>
                  </DataSourceCard>
                </div>
              </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-cards-bg h-100">
            <h4 className="mb-3 text-center">Acknowledgements</h4>
            <p>Andrew Crossland, PhD inspired our project with his real-time web-based tool, mygridgb.co.uk, and offered us constant support and encouragement throughout the hackathon.</p>
            <br />
            <p>Anna Putt for organizing the MentorMe initiative and its first hackathon, &apos;Earth, Fire, Air, Water - Where Does Our Energy Come From?&quot;, and Ben Fairbairn for coming up with the theme. We had the honour of winning the hackathon with this project!</p>
            <br />
            <p>Le Wagon - London trained us and provided an excellent co-working space in the heart of London for the duration of the hackathon.</p>
          </div>
        </div>
      </div>
    </>
  );
}
