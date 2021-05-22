import React,{useState} from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    const [state, setstate] = useState({
        labels:['Nigeria','UN','U.S.A','Ghana','South Africa','Zambia','France','Ang','May','Lala','Stephy','Togo'],
        datasets:[
            {label:'Rainfall',
            backgroundColor: '#65a9f8',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data:[10,20,30,40,50,60,70,80,90,15,100],
            
        }
        ]
    })

    return (
        <div >
            <Bar
                data ={state}
                width={300}
	            height={300}
                options ={{
                    maintainAspectRatio: false , 
                    title:{
                        display:true,
                        text:'Age and Demography/region',
                        fontSize: 20
                    },
                    legend:{
                        display:false,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}

export default BarChart
