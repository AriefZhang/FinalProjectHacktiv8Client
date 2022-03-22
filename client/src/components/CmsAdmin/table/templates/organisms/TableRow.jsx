import React from 'react'
import { priceFormatter, yearFormatter, mileageFormatter } from '../../../../../helpers'
import Td from "../atoms/Td"
import TdDesc from "../atoms/TdDesc"
import TdStatus from '../atoms/TdStatus'
import TdAction from "../atoms/TdAction"
import TdName from "../atoms/TdName"

export default function TableRow({ car }) {
  console.log(car.Type.Brand)
  return (
    <tr className="odd:bg-white even:bg-slate-100 py-8 border-b text-slate-900 font-open-sans">
      <TdName data={car.name} />
      <TdDesc data={car.description} />
      <Td data={yearFormatter(car.yearMade)} />
      <Td data={priceFormatter(car.price)} />
      <Td data={car.Type.Brand.name} />
      <Td data={car.Type.modelName} />
      <Td data={mileageFormatter(car.mileage)} />
      <Td data={car.fuel} />
      <TdStatus data={car.passedInspection} />
      <TdAction data={car.id} />
  </tr>
  )
}
