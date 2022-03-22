import {useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import serverApi from '../API/serverApi'


export default function Detail() {
  const [carsDetail, setCarsDetail] = useState({});
  const [imageUrl, setImageUrl] = useState('')
  const [imageId, setImageId] = useState(1)
  const [exterior, setExterior] = useState({})
  const [interior, setInterior] = useState({})
  const [kolong, setKolong] = useState({})
  const [roadTest, setRoadTest] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    serverApi.get(`/cars/${id}`)
    .then(res => {
      setCarsDetail(res.data)
      res.data.Images.map(el => {
        if (el.id === imageId) setImageUrl(el.image) 
      })
      return serverApi.get(`/inspections/${res.data.Inspection.id}`)
    })
    .then(res => {
      setExterior(res.data.Exterior);
      setInterior(res.data.Interior);
      setKolong(res.data.Kolong);
      setRoadTest(res.data.RoadTest);
    })
    .catch(err => console.log(err))
  }, [])


  // TOTAL EXTERIOR TRUE
  const exteriorEntries = Object.entries(exterior);
  const exteriorTrue = exteriorEntries.filter((el) => el[1] === true);

  // TOTAL INTERIOR TRUE
  const interiorEntries = Object.entries(interior);
  const interiorTrue = interiorEntries.filter((el) => el[1] === true);

  // TOTAL ROAD TEST TRUE
  const roadTestEntries = Object.entries(roadTest);
  const roadTestTrue = roadTestEntries.filter((el) => el[1] === true);

  // TOTAL KOLONG TEST TRUE
  const kolongTestEntries = Object.entries(kolong);
  const kolongTestTrue = kolongTestEntries.filter((el) => el[1] === true);

  const fetchMap = (id) =>{
    navigate(`/map-navigation/${id}`)
  }

  const goToPaymentPage = (id) => {
    navigate(`/payments/${id}`)
  }
  const getFullReport = (idInspection) => {
    navigate(`/full-report/${idInspection}`)
  }

  return (
    <div className="containerDetail">
      {/* image and maps navigasi */}
      <div className="flex flex-row">
        <div className="w-4/6">
          <div className="carousel w-full">
            <div className="carousel-item relative w-full">
              <img src={imageUrl} className="object-cover h-5/6 w-full" />
              {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={prev} className="btn btn-circle">❮</button> 
                <button onClick={next}  className="btn btn-circle">❯</button>
              </div> */}
            </div>
          </div>
          
        </div>
        <div className="w-2/6 h-96 p-4">
          <h1 className="flex items-start font-bold text-2xl mt-1.5">{carsDetail.name}</h1>
          <h4 className="flex items-start text-sm mt-4">{carsDetail.mileage?carsDetail.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."): carsDetail.mileage} km</h4>
          <h2 className="flex items-start font-bold text-xl text-red-600">Rp. {carsDetail.price?carsDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."): carsDetail.price} (cash)</h2>
          <div className="flex items-start flex-row rounded-md mt-4 p-3 bg-slate-100">
            <i className="flex justify-center mt-1 fa-solid fa-location-dot text-red-600 mr-4" />
            <button className="flex justify-center font-semibold text-sky-600" onClick={() => fetchMap(carsDetail.id)}>Check Dealer Location</button>
          </div>

          {/* modal pembayaran */}
          <div className="flex flex-row items-end">
            <button onClick={() => goToPaymentPage(carsDetail.id)} className="flex btn btn-outline items-center justify-center mt-12 font-bold w-5/6 h-12 rounded-md">Buy Now</button>
            <a href="https://api.whatsapp.com/send/?phone=6281355538777" className="flex btn btn-outline items-center justify-center mt-12 ml-2 rounded-md h-12"><i className="fa-brands fa-whatsapp text-4xl text-green-400"></i></a>
          </div>
        </div>
      </div>

      {/* detail mobil */}

      <div className="mb-8">
        <h1 className="font-bold text-slate-900 text-3xl">Car Detail</h1>
        <h1 className="font-semibold text-slate-900 text-lg mt-3">ID : {carsDetail.id}</h1>
      </div>
      
      <hr className="mb-4 mx-16"/>

      <div className="flex justify-around mb-10">
        <div className="w-2/5 h-auto">
          <div className="flex justify-between w-full mb-4 ">
            <span className="text-slate-600 font-semibold">Fuel Type</span>
            <span className="text-slate-800 font-bold">{carsDetail.fuel}</span>
          </div>
          <hr className="mb-4"/>
          <div className="flex justify-between w-full mb-4">
            <span className="text-slate-600 font-semibold">Number Of Seat</span>
            <span className="text-slate-800 font-bold">{carsDetail.seats}</span>
          </div>
          <hr className="mb-4"/>
          <div className="flex justify-between w-full mb-4">
            <span className="text-slate-600 font-semibold">Year Made</span>
            <span className="text-slate-800 font-bold">{carsDetail.yearMade? carsDetail.yearMade.substring(0, 4) : carsDetail.yearMade}</span>
          </div>
        </div>

        <div className="w-2/5 h-auto">
          <div className="flex justify-between w-full mb-4">
            <span className="text-slate-600 font-semibold">Color</span>
            <span className="text-slate-800 font-bold">{carsDetail.color}</span>
          </div>
          <hr className="mb-4"/>
          <div className="flex justify-between w-full mb-4">
            <span className="text-slate-600 font-semibold">Inspection</span>
            {
              carsDetail.passedInspection === true ? <span className="px-1 rounded-full bg-green-600"><i className="fa-solid fa-check text-white"></i></span> : <span className="px-2 rounded-full bg-red-600"><i className="fa-solid fa-x text-white"></i></span>
            }
          </div>
          <hr className="mb-4"/>
          <div className="flex justify-between w-full mb-4">
            <span className="text-slate-600 font-semibold">Current Mileage</span>
            <span className="text-slate-800 font-bold">{carsDetail.mileage?carsDetail.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."): carsDetail.mileage} km</span>
          </div>
        </div>
      </div>

      {/* card inspeksi */}

      <div className="flex justify-center bg-gray-100">
          <div className="flex flex-row  w-3/4 my-24">
              <div className="shadow-lg shadow-slate-600 rounded-l-lg w-3/6 bg-blue-900">
                <div className="p-10">
                  <h1 className="font-bold text-lg text-white">Mobil Bekas Berkualitas</h1>
                  <p className="font-semibold text-white">Proses inspeksi ketat 33 titik dan rekondisi memastikan Anda mendapatkan standar tertinggi. Hanya 3 dari 100 mobil yang mendapatkan persetujuan Otosic Certified.</p>
                </div>
              </div>
              <div className="shadow-lg shadow-slate-400 rounded-r-lg w-3/6 bg-white">
                <div className="flex flex-row justify-between m-5">
                  <span className="font-semibold text-slate-600">Eksterior</span>
                  <span className="font-bold text-green-500">{exteriorTrue.length} Graduated</span>
                </div>
                <hr className="mx-5"/>
                <div className="flex flex-row justify-between m-5">
                  <span className="font-semibold text-slate-600">Interior</span>
                  <span className="font-bold text-green-500">{interiorTrue.length} Graduated</span>
                </div>
                <hr className="mx-5"/>
                <div className="flex flex-row justify-between m-5">
                  <span className="font-semibold text-slate-600">Road Test</span>
                  <span className="font-bold text-green-500">{roadTestTrue.length} Graduated</span>
                </div>
                <hr className="mx-5"/>
                <div className="flex flex-row justify-between m-5">
                  <span className="font-semibold text-slate-600">Bottom Section</span>
                  <span className="font-bold text-green-500">{kolongTestTrue.length} Graduated</span>
                </div>
                <div className="flex flex-row justify-center m-5">
                  <button onClick={() => getFullReport(carsDetail.Inspection.id)} className="btn btn-outline my-3">Get Full Report</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}