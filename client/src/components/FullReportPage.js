import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import serverApi from "../API/serverApi";

export default function FullReportPage() {
  const [inspection, setInspection] = useState({});
  const [exterior, setExterior] = useState({});
  const [interior, setInterior] = useState({});
  const [kolong, setKolong] = useState({});
  const [roadTest, setRoadTest] = useState({});
  const { idInspection } = useParams();

  useEffect(() => {
    serverApi
      .get(`/inspections/${idInspection}`)
      .then((res) => {
        setInspection(res.data);
        setExterior(res.data.Exterior);
        setInterior(res.data.Interior);
        setKolong(res.data.Kolong);
        setRoadTest(res.data.RoadTest);
      })
      .catch((err) => console.log(err));
  }, [idInspection]);

  return (
    <>
      {/* main inspection */}
      <div className='flex flex-col justify-center bg-gray-100'>
        <div className='bg-white mx-20 mt-10 w-100 rounded-md'>
          <div className='flex flex-row justify-between p-3'>
            <span className='font-bold text-gray-800'>Main Inspection</span>
            {inspection.mainInspection === true ? (
              <span className='font-bold text-green-500'>Passed</span>
            ) : (
              <span className='font-bold text-red-500'>Not Passed</span>
            )}
          </div>
          <div className='flex flex-row justify-center w-100 p-4'>
            <div className='flex w-2/4'>
              <img
                className='rounded-l-md'
                src='https://www.carsome.id/_nuxt/img/r-no-0.720afe1.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start rounded-r-md text-left w-2/4 bg-slate-200 p-4'>
              <span>Inspection standard</span>
              <p className='mb-3 text-slate-500'>
                1) The main structural components of the car including the front
                inner wheelhouse, roof panel reinforcement, inner front pillar,
                center pillar, inner rear pillar, front chassis member, rear
                chassis member and chassis frame are assessed to ensure there
                are no signs of different from Repair or replacement on each
                weld joint mark.
              </p>
              <p className='text-slate-500'>
                2) Signs of seat belt replacement will be identified by
                comparing the year of manufacture of the belt with the year of
                manufacture of the vehicle. The seat belt is a safety feature
                designed to work effectively only once. Seat belts and airbags
                in cars involved in major collisions are usually replaced. Once
                the seat belt webbing is subjected to an impact force, the belt
                will stretch permanently and lose its vital elasticity.
              </p>
            </div>
          </div>
        </div>

        {/* Eksterior */}

        <div className='bg-white mx-20 my-10 w-100 rounded-md'>
          <div className='flex flex-row justify-between p-4'>
            <span className='font-bold text-gray-800'>Exterior</span>
            {inspection.exteriorInspection === true ? (
              <span className='font-bold text-green-500'>Passed</span>
            ) : (
              <span className='font-bold text-red-500'>Not Passed</span>
            )}
          </div>
          <div className='flex flex-row justify-center p-4'>
            <div className='flex w-2/4'>
              <img
                className='rounded-l-md'
                src='https://www.carsome.id/_nuxt/img/r-1.52ab45b.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start rounded-r-md text-left w-2/4 bg-slate-200 p-4'>
              <span className='font-bold text-gray-800'>
                Inspection standard
              </span>
              <p className='mb-3 text-slate-500'>
                The inspector team ensures all parts that are outside the
                vehicle such as, bumper and grille, tires, hood, fenders, doors,
                body side panels, trunk lid, roof, glass, head lamp, stop lamp,
                mirrors and report according to conditions such as repainting ,
                scratches, dimples, torn dents and putty
              </p>
            </div>
          </div>
          <div className='flex flex-row p-4'>
            <div className='flex flex-col w-2/4 mr-10'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Bamper</span>
                {exterior.bumper === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Chasis</span>
                {exterior.chassis === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Rear Glass</span>
                {exterior.kacaBelakang === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Side Mirror</span>
                {exterior.kacaSamping === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
            <div className='flex flex-col w-2/4'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Lights</span>
                {exterior.lights === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Roof</span>
                {exterior.roof === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center content-center justify-between w-full my-3'>
                <span>Spion</span>
                {exterior.spion === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Tire</span>
                {exterior.tire === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* interior */}

        <div className='bg-white mx-20 mb-10 w-100 rounded-md'>
          <div className='flex flex-row justify-between p-4'>
            <span className='font-bold text-gray-800'>Interior</span>
            {inspection.interiorInspection === true ? (
              <span className='font-bold text-green-500'>Passed</span>
            ) : (
              <span className='font-bold text-red-500'>Not Passed</span>
            )}
          </div>
          <div className='flex flex-row justify-center p-4'>
            <div className='flex w-2/4'>
              <img
                className='rounded-l-md'
                src='https://www.carsome.id/_nuxt/img/r-2.0f993b9.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start rounded-r-md text-left w-2/4 bg-slate-200 p-4'>
              <span className='font-bold text-gray-800'>Interior standard</span>
              <p className='mb-3 text-slate-500'>
                1) Conduct Pre-inspection with standard steps to check and test
                all car interior features, facilities, seats, carpets,Dashboard
                to make sure all are functioning/under Carsome Certified
                standard.
              </p>
              <p className='mb-3 text-slate-500'>
                2) Smell-free & good AC condition is our first priority.
              </p>
              <p className='mb-3 text-slate-500'>
                3) Premium Detailing Cleaning is done for the car interior
              </p>
            </div>
          </div>
          <div className='flex flex-row p-4'>
            <div className='flex flex-col w-2/4 mr-8'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Brake Pedal</span>
                {interior.brakePedal === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Dashboard</span>
                {interior.dashboard === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Gas Pedal</span>
                {interior.gasPedal === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Klakson</span>
                {interior.klakson === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
            <div className='flex flex-col w-2/4'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Rear View Mirror</span>
                {interior.rearViewMirror === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Seats</span>
                {interior.seats === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center content-center justify-between w-full my-3'>
                <span>Speedometer</span>
                {interior.speedometer === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Steering Wheel</span>
                {interior.steeringWheel === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Road Test */}

        <div className='bg-white mx-20 mb-10 w-100 rounded-md'>
          <div className='flex flex-row justify-between p-4'>
            <span className='font-bold text-gray-800'>Road Test</span>
            {inspection.roadTest === true ? (
              <span className='font-bold text-green-500'>Passed</span>
            ) : (
              <span className='font-bold text-red-500'>Not Passed</span>
            )}
          </div>
          <div className='flex flex-row justify-center p-4'>
            <div className='flex w-2/4'>
              <img
                className='rounded-l-md'
                src='https://www.carsome.id/_nuxt/img/r-3.a303450.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start rounded-r-md text-left w-2/4 bg-slate-200 p-4'>
              <span className='font-bold text-gray-800'>Interior standard</span>
              <p className='mb-3 text-slate-500'>
                1) Our Technical Specialist performs 2 test drives
                (Pre-Inspection & Quality Check after repair) for all used cars.
                Pre-Inspection to test engine, steering and brake performance
                and record their findings and repair them. Quality Inspection
                after repair to ensure engine , steering and brakes work, no
                unexpected noise or vibrationAnd mechanical problems.
              </p>
              <p className='mb-3 text-slate-500'>
                2) Diagnose vehicles with high technology and professional
                inspection tools to get accurate data of each vehicle
              </p>
            </div>
          </div>
          <div className='flex flex-row p-4'>
            <div className='flex flex-col w-2/4 mr-8'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Engine Starting</span>
                {roadTest.engineStarting === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Engine Idling</span>
                {roadTest.engineIdling === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Steering System</span>
                {roadTest.steeringSystem === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
            <div className='flex flex-col w-2/4'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Acceleration</span>
                {roadTest.acceleration === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Engine Sound</span>
                {roadTest.engineSound === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Brake</span>
                {roadTest.brake === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Kolong */}

        <div className='bg-white mx-20 w-100 mb-10 rounded-md'>
          <div className='flex flex-row justify-between p-4'>
            <span className='font-bold text-gray-800'>Bottom Section</span>
            {inspection.kolongTest === true ? (
              <span className='font-bold text-green-500'>Passed</span>
            ) : (
              <span className='font-bold text-red-500'>Not Passed</span>
            )}
          </div>
          <div className='flex flex-row justify-center p-4'>
            <div className='flex w-2/4'>
              <img
                className='rounded-l-md'
                src='https://www.carsome.id/_nuxt/img/r-4.825c5ab.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start rounded-r-md text-left w-2/4 bg-slate-200 p-4'>
              <span className='font-bold text-gray-800'>Interior standard</span>
              <p className='mb-3 text-slate-500'>
                1) Walk test and inspection of undercarriage using a jack if
                necessary to carry out inspection of the undercarrige. Make sure
                there are no visible liquid/oil leaks, Nothing hanging/loose, No
                visible damage, No rusty bottom and tighten all bolts.
              </p>
              <p className='text-slate-500'>
                2) All brake pads have a minimum thickness of 4mm. The minimum
                safety brake pad thickness limit is 2.0mm.
              </p>
            </div>
          </div>
          <div className='flex flex-row p-4'>
            <div className='flex flex-col w-2/4 mr-8'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Oli Mesin</span>
                {kolong.oliMesin === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Transmission</span>
                {kolong.transmission === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Minyak Rem</span>
                {kolong.minyakRem === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Radiator</span>
                {kolong.radiator === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Aki</span>
                {kolong.aki === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
            <div className='flex flex-col w-2/4'>
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Bottom Cover</span>
                {kolong.bottomCover === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Knalpot</span>
                {kolong.knalpot === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center content-center justify-between w-full my-3'>
                <span>Kesetabilan Ban</span>
                {kolong.kestabilanBan === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Shock Breaker</span>
                {kolong.shockBreaker === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
              <hr />
              <div className='flex flex-row items-center justify-between w-full my-3'>
                <span>Master Brake</span>
                {kolong.masterBrake === true ? (
                  <span className='px-2 rounded-full bg-green-600'>
                    <i className='fa-solid fa-check text-white'></i>
                  </span>
                ) : (
                  <span
                    className='px-2 rounded-full bg-red-600'
                    style={{ color: "white" }}
                  >
                    x
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
