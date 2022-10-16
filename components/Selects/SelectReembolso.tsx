import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface IReembolso{
  id: string
  name: string
}

export default function SelectReembolso() {
const [reembolsos, setReembolsos] = useState<IReembolso[]>([])

const reembolsoOptions = reembolsos.map((reembolso) => ({
  value: reembolso.id,
  label: reembolso.name
}))

useEffect(() => {
  fetch('/api/reembolso')
  .then(res => res.json())
  .then(({ data }) => setReembolsos(data))
}, [])


  return(
  <Select 
  options={reembolsoOptions}
  placeholder='Reembolso'

  />
 )}