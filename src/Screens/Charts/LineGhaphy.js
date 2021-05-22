import React,{useState} from 'react'
import {Line}  from 'react-chartjs-2'

const LineGhaphy = () => {
    const [state,setState]  = useState({
        labels: ['January', 'February', 'March',
           'April', 'May','June','July','Aug','step','Oct','Nov','Dec'],
        datasets: [
            {
                
              label: 'Rainfall',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'white',
              borderColor: '#65a9f8',
              borderWidth: 2,
              data: [65, 59, 80, 81,44,54,92,61,66,71,34, 56,]
            }
          ]
    })

    return (
        <div className="lineGraphy">
            <Line
                data ={state}
                height={300}
                options ={{
                    maintainAspectRatio: false , 
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                      }

                }}
            />
        </div>
    )
}

export default LineGhaphy
