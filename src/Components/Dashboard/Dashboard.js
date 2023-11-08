import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Apply_loan from './Apply_loan/Apply_loan'
import Dasbhboard_Content from './Dashboard_Content/Dasbhboard_Content'
import Dashboard_Header from './Dashboard_Header/Dashboard_Header'
import Dashboard_Home from './Dashboard_Home/Dashboard_Home'
import Status from './Status/Status'

export default function Dashboard() {

 
  return (
    <div>
        <Dashboard_Header/>
          <Routes>
            <Route path='' element={<Dashboard_Home/>}/>
            <Route path='apply_loan' element={<Apply_loan/>}/>
            <Route path='loan_status' element={<Status/>}/>

                </Routes>
                 
    </div>
  )
}
