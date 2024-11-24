"use client"
import React, { useState } from 'react'
import './page.css'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [data,setData]=useState({items:'admin'})
    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const router=useRouter()
    const onSubmitHandler=async(e:React.FormEvent)=>{
        e.preventDefault()
        const response= await fetch('http://localhost:3000/admin',{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify(data)
        })
        if(response.ok){
           
            const responseData= await response.json()
            console.log("l'admin est cree",responseData)
            router.push('/login')

        }else{
            console.log('erreur se produit')
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
             </a>
             <h3 className="text-center mb-5">Create Account</h3>
             <div className="form-scroll-container">
             <form onSubmit={onSubmitHandler}>
               <div className="mb-3">
                 <label htmlFor="exampleInputtext1" className="form-label">FullName</label>
                 <input type="text" onChange={changeHandler} name='fullname' className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
               </div>
               <div className="mb-3">
                 <label htmlFor="exampleInputtext1" className="form-label">Email</label>
                 <input type="text" onChange={changeHandler} name='email' className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
               </div>
               <div className="mb-3">
                 <label htmlFor="exampleInputtext1" className="form-label">Password</label>
                 <input type="password" onChange={changeHandler} name='password' className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
               </div>
               <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                 <input type="number" name='phone' onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>
            
               <button type='submit' className="btn btn-primary w-100 py-8 fs-4 mb-4">Sign Up</button>
               <div className="d-flex align-items-center justify-content-center">
                 <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                 <a className="text-primary fw-bold ms-2" href="./authentication-login.html">Sign In</a>
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

   </div>
  )
}

export default Register
