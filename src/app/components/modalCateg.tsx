"use client"
import React, { useEffect, useState } from 'react'
import { Modal, Button,Form  } from 'react-bootstrap';

interface Category{
    _id:string,
    Name:string,
    discription:string
}
interface ModalProps{
    isOpen:boolean;
    onClose:()=>void;
    categry:Category | null;
    onUpdate:(updateCatgory:Category) => void;
}
const ModalCateg:React.FC<ModalProps> = ({isOpen,onClose,categry,onUpdate}) => {
    const [data,setData]=useState<Category | null>(null);
    useEffect(()=>{
        if(categry){
            setData(categry)
        }
    },[categry])
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>) =>{
        setData({
            ...data!,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler=(e:React.FormEvent)=>{
        e.preventDefault()
        if(data){
            onUpdate(data)
        }
        onClose()
    }
    if(!isOpen || !data) return null
  return (
    <div>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formRef">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={data.Name}
                onChange={onChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="discription"
                value={data.discription}
                onChange={onChangeHandler}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
             update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalCateg
