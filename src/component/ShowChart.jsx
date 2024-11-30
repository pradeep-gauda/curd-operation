import React from 'react'
// import {Chart as Chatjs} from 'chart.js/auto'
// import {Bar, Doughnut, Pie} from 'react-chartjs-2'
import {BarChart} from '@mui/x-charts/BarChart'

const ShowChart = ({tableData}) => {
    const productlabel= tableData.map((item)=>(item.product))
    const categoryLabel = tableData.map((item)=>item.category)
    const priceData= tableData.map((item)=>item.price)
  
    return (
        <> <div className = 'container' > <div className='row'>
            <div className='col-lg-12'>
                <div className='card'>
                    <div className='card-body'>
                    <BarChart
                    xAxis={[{ scaleType: 'band', data:productlabel }]}
                    series={[{ data:priceData}]}
                    height={300}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default ShowChart