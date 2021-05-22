import React,{useState} from 'react'
import {Doughnut} from 'react-chartjs-2'

const PieChart = () => {
    const [state,setState] = useState({
        labels:[
            'Technology','Healthcare','Communication','Education','Food & Bev.'
        ],
        datasets:[
            {
                label:'RainFall',
                backgroundColor: [
                    '#ffdd00',
                    '#ff605a',
                    '#707071',
                    '#204978',
                    '#65a9f8',
                    '#65a9f8'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                    ],
                data: [40, 59, 80, 81, 56]
            }
        ]
    })
    return (
        <div className="piechart">
            <Doughnut
                data={state}
                width={300}
	            height={250}
                options ={{
                    maintainAspectRatio: false , 
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend:{
                        display:true,
                        position: 'right'
                    },
                    
                }}
            />
        </div>
    )
}

export default PieChart
