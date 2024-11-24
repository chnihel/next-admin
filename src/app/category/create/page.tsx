"use client"; // Indique que ce composant est un composant client
import React, { useState } from 'react'
import {Button,Form} from 'react-bootstrap'
import './page.css'
import { useRouter } from 'next/navigation';
const CreatePublications = () => {
    const [data,setData]=useState({
      Name: '',
      discription: ''
        
    })
    const router=useRouter()
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler=async(e:React.FormEvent)=>{
        e.preventDefault()
        const reponse=await fetch('http://localhost:3000/category',{
           method:'POST',
           headers:{
            'Content-Type':'application/json'
           },
           body:JSON.stringify(data)
        })
        if(reponse.ok){
            console.log("publication created")
            router.push('/category/list')
        }else{
            console.log("erreur dans la creation")
        }
    }
    return (
        <div className='container-fluid'>
            <div className='form-container p-5 shadow-sm rounded m-auto'>
            <h2>Create Category</h2>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text"
                name="Name"
                placeholder="name"
                onChange={onChangeHandler}
                required />
            </Form.Group>
           <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control 
                type="text"
                name="discription"
                placeholder="Description"
                onChange={onChangeHandler}
                required />
           </Form.Group>
           <div className="text-center">
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </div>
           
            
          </Form>
          </div>
        </div>
      );
}

export default CreatePublications
