import Header from '@/components/Header'
import TransformationForm from '@/components/TransformationForm'
import React from 'react'
import { transformationTypes } from '@/constants'

const addPage = ({params:{type}}:SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
    <Header 
   title={transformation.title}
    subtitle={transformation.subTitle} />

    <TransformationForm/>
    </>
  )
}

export default addPage