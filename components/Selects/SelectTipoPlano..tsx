import React, { useEffect, useState } from 'react'
import Select from 'react-select'

interface ITipo {
  id: string
  name: string
}

export default function SelectTipoPlano() {
  const [tipos, setTipos] = useState<ITipo[]>([])

  const tipoOptions = tipos.map((tipo) => ({
    value: tipo.id,
    label: tipo.name,
  }))

  useEffect(() => {
    fetch('/api/tipoPlano')
    .then(res => res.json())
    .then(({ data }) => setTipos(data))
  }, [])
  return <Select options={tipoOptions} placeholder="Tipo de Plano" />
}
