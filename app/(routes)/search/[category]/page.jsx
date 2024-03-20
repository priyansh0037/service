"use client"

import React, { useEffect, useState } from 'react'
import { getBusinessByCategory } from '../../../_services/GlobalApi'
import BusinessList from '../../../_components/BusinessList'

const BusinessByCategory = ({params}) => {

const [businessList , setBusinessList] = useState([])

  const getBusinessList = async ()=>{
   const res = await getBusinessByCategory(params.category)
  //  console.log(res?.businessLists)
   setBusinessList(res?.businessLists)

  }
  useEffect(()=>{
    // console.log(params.category)
    getBusinessList()
  },[])
  

  return (
    <div className=''>
<BusinessList title={params.category} businessList={businessList}/>
    </div>
  )
}

export default BusinessByCategory