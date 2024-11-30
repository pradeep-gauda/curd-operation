import React, {useState } from 'react'
import Data from '../Data.js'
import ShowTable from './ShowTable'

const InsertForm = () => {
 const [tableData,setTableData]=useState(Data) 
 const [inputerror,setInputError]=useState(false)
 const [message, setMessage]= useState("")
 const [formData,setFormData] = useState({
  id:"",
  category:"",
  product:"",
  price:""
 })

 //handle input
 const handleInput=(e)=>{
   const {name,value} = e.target;
   setFormData({...formData,[name]:value})
   
 }
 //handle submit
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(!formData.category)
   {
     alert("All filed are manadator");
     return;
   }
   
   if(formData.id){
      const updateData = tableData.map((item)=>item.id===formData.id ? {...item,...formData}: item)
      setTableData(updateData)
      setMessage("Record is updated")
      setFormData({
        id:'',
        category:'',
        product:'',
        price:''
      })
   }
   else{

//generate the row of input values
  const row={
  id: Math.random(),
  category: formData.category,
  product: formData.product,
  price: formData.price

 }
  
 // push the new row in tableData of Data.js
//const newData=tableData.push(row)
setTableData([...tableData,row])
setMessage("Succesfully Inserted")
setFormData({
  id:"",
  category:"",
  product:"",
  price:""
 })
   }

 }

  //delete
    const handleDelete=(id)=>{
      if(window.confirm("Are sure ?"))
      {
          setTableData(tableData.filter((item)=> item.id !==id))
          setMessage("Record is deleted successfully")
      }
      else{
        setMessage("Something went wrong")
      }
      
  }

  //edit
  const handleEdit=(item)=>{
  setFormData(item)

  }


  return (
    <>
       
        <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {message && <p className='alert alert-primary'>{message}</p>}
          </div>
        </div>
            <div className='row'>
                <div className='col-lg-3'>
                    <label className='form-label'>Enter Category</label>
                    <input className='form-control' value={formData.category}  onChange={handleInput} name="category" type='text' />
                    <p>{inputerror.category}</p>
                </div>
                <div className='col-lg-3'>
                    <label className='form-label'>Enter Product</label>
                    <input className='form-control' value={formData.product}  onChange={handleInput} name="product" type='text' />
                </div>
                <div className='col-lg-3'>
                    <label className='form-label'>Enter Price</label>
                    <input className='form-control' value={formData.price}  onChange={handleInput} name="price" type='number' />
                </div>
                <div className='col-lg-3'>
                    <button className='btn btn-primary mt-4' onClick={handleSubmit}>Save</button>
                    
                </div>
            </div>
        </div>
        <ShowTable tableData={tableData} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default InsertForm