"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Reset = ({ params }: { params: { token: string } }) => {
  const [data,setData]=useState({})
  const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
const router=useRouter()
  const onSubmitHandler=async(e:React.FormEvent)=>{
    e.preventDefault()
    const response=await fetch(`http://localhost:3000/auth/${params.token}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    if(response.ok){
      const responseData=await response.json()
      console.log('reset Password',responseData)
      router.push('/login')
    }
  }

  return (
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
                    <label htmlFor="exampleInputEmail1" className="form-label">password</label>
                    <input type="password" className="form-control" name='password' onChange={changeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox"  id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                  </div>
                  <button type='submit' className="btn btn-primary w-100 py-8 fs-4 mb-4">Sign In</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">New to SeoDash?</p>
                    <a className="text-primary fw-bold ms-2" href="./authentication-register.html">Create an account</a>
                  </div>
                </form>
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

export default Reset
