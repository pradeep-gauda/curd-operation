import React, {useState} from 'react'
import Data from '../Data.js'
import ShowChart from './ShowChart'

const ShowTable = ({tableData,handleDelete,handleEdit}) => {
    //const [tableData,setTableData] = useState(tableData)
    //console.log(tableData)
    return (
        <> 
        <div className = 'container mt-4'> <div className='row'>
            <div className='col-lg-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category</th>
                            <th>Producat</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableData && (
                        tableData.map((item,index)=>(
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.category}</td>
                            <td>{item.product}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-info' onClick={(()=>handleEdit(item))}>Edit</button>&nbsp;
                                <button className='btn btn-danger' onClick={(()=>handleDelete(item.id))}>Delete</button>
                            </td>
                        </tr>
                        )))
                    }
                   
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
       <br/>
       {<ShowChart tableData={tableData}/>}
       </>
       
    )
}

export default ShowTable