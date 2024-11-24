"use client"
import React, { useState } from 'react'

const Forget = () => {
    const [data,setData]=useState({})
    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler=async (e:React.FormEvent)=>{
        e.preventDefault()
        const response =await fetch('http://localhost:3000/auth/forget',{
            method:'POST',
            //il est necessaire de mettre type de donnees
            headers:{
                'Content-Type':'application/json'
               },
            body:JSON.stringify(data)
        })
       if(response.ok){
        const dataResponse=await response.json()
        console.log("les donne de user",dataResponse)
       }else{
        console.log("erreur dans email")
       }
    }

  return (
    <div>
      <div>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/logo-light.svg" alt="" />
                </a>
                <p className="text-center">Your Social Campaigns</p>
                <form onSubmit={onSubmitHandler}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' onChange={changeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  
                 
                  <button type='submit' className="btn btn-primary w-100 py-8 fs-4 mb-4">Send</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Forget
