import { useState } from 'react';
import ElementalCard from "../components/ElementalCard";
// import DateCard from "../components/DateCard";
import Piechart from "../components/Piechart";
import { ELEMENTS, COLOR_MAPPING } from '../utils/Constants'
import ProgressCircle from '../components/ui/ProgressCircle';



export default function Dashboard({ data }) {
  const [timePeriod, setTimePeriod] = useState('30_min');

  const isLoading = !data || !data.elements

  return (
    <>
    <div className='mb-5 text-center'>
      <h1>Earth, Water, Air and Fire</h1>
      <p>Where does our energy comes from?</p>
    </div>
    <p className='mb-5'>
      Earth, wind, fire, and water - the four elements that have shaped our world throughout human history. Today, these same forces are powering our future. This dashboard visualises how the UK harnesses these elemental energies, from the earth&apos;s resources and the wind&apos;s strength to the burning of fuels and water&apos;s flow, driving us towards a sustainable tomorrow.
    </p>
      {isLoading ? (
        <div className='loading'><ProgressCircle /></div>
      ) : (
        <div className="wrapper">
          <section className="main-piechart" aria-label="Main Piechart">
            <Piechart
              data={data}
              timePeriod={timePeriod}
              setTimePeriod={setTimePeriod}
              colorMapping={COLOR_MAPPING}
              width="100%"
              height="auto"
            />
          </section>

          <section className="elemental-cards" aria-label="Elemental breakdown">
              {ELEMENTS.map(element => (
                <div key={element} className="cards-bg">
                  <ElementalCard
                    element={element}
                    data={data}
                    timePeriod={timePeriod}
                    setTimePeriod={setTimePeriod}
                    colorMapping={COLOR_MAPPING}
                  />
                </div>
              ))}
          </section>
        </div>
      )}
    </>
  )
}
