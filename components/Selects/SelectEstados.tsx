import React, { useState,  useEffect } from 'react'
import Select from 'react-select'

interface IEstados {
  id: string
  name: string
}

export default function SelectEstados() {
  const [estados, setEstados] = useState<IEstados[]>([])

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.name,
  }))
  useEffect(() => {
    fetch('/api/estados')
    .then(res => res.json())
    .then(({ data }) => setEstados(data))
  }, [])

  return <Select 
  options={estadoOptions} 
  placeholder="Selecione uma Cidade" />
}
