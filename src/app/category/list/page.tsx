
//on ajoute cteet use client pour declarer qui render est effectue cote client de cette condition on peut utiliser hooks
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ModalCateg from '@/app/components/modalCateg';
import './page.css'
interface Category{
    _id:string;
    Name:string;
    discription:string
}
const ListCategory = () => {
    const [categories,setCategories]=useState<Category[]>([])
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [selectedCatg,setSeletedCateg]=useState<Category |null>(null)
    
   
        const fetchCategories=async ()=>{
            try{
               const response=await fetch('http://localhost:3000/category')
               if(!response.ok){
                  throw new Error('Erreur lors de la récupération des données');
               }
               const data=await response.json()
               console.log("les donnees de database",data)
               const categories:Category[]=data.AllCategories
               setCategories(categories)
            }catch(err){
                console.log("erreur lors de la recuperation des donnes")
            }
        }
       
    useEffect(()=>{
        fetchCategories()
    },[])

    //delete data
    const deleteCateg=async (id:string)=>{
        try {
            const response=await fetch(`http://localhost:3000/category/${id}`,{
               method:"Delete",

            })
            fetchCategories()
        
        } catch (error) {
            console.log("erreur dans la supprission des donnees",error)
        }
    }
    const updateCategry=async (updateCatg:Category)=>{
      try{
        const response = await fetch(`http://localhost:3000/category/${updateCatg._id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(updateCatg) // Envoyer les données mises à jour
      });

      if (response.ok) {
          console.log('Les données ont été mises à jour');
       //   router.push('/category/list'); // Rediriger vers la liste après mise à jour
       fetchCategories()
      } else {
          console.log("Erreur lors de la mise à jour");
      }
  } catch (error) {
      console.log('Erreur lors de la requête', error);
  }
    }

  return (
    <div className='container-fluid mt-5 pt-5'>
      <div className="row">
    <div className="col-lg-8 m-auto">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">List of category</h5>
        <div className="table-responsive">
          <table className="table text-nowrap align-middle mb-0">
            <thead>
              <tr className="border-2 border-bottom border-primary border-0">
              <th scope="col" className="ps-0">Num</th>
                <th scope="col" className="ps-0">Name</th>
                <th scope="col" className="text-center">Description</th>
                <th scope="col" className="ps-0 section1">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {categories.map((item,index)=>{
            return(
               <tr key={index}>
                <td>{index}</td>
                 <td>{item.Name}</td>
                 <td>{item.discription}</td>
                 <td><button type='submit' style={{color:"blue"}} className='button1' onClick={()=>deleteCateg(item._id)}>delete</button>
                 
                 <button type='submit' style={{color:"red"}} className='button2' onClick={()=>{setIsModalOpen(true);setSeletedCateg(item)}}>update</button>
               
                 </td>
                 

               </tr>
            )
        })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <ModalCateg 
  isOpen={isModalOpen}
  onClose={()=>setIsModalOpen(false)}
  categry={selectedCatg}
  onUpdate={(updateCatg)=>updateCategry(updateCatg)}/>
  </div>
  </div>
  )
}

export default ListCategory
