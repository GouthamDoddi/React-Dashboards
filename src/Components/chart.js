import React, {useState, useEffect}from 'react';
import { Bar } from 'react-chartjs-2';



const Graph = () => {
    const [chartData, setChartData] = useState({})

    const chart = () =>
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
                {
                    label: 'Jan',
                    data: [100, 30, 90, 200],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        '#48bfe3',
                        '#eddcd2',
                        '#ffb4a2'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'Feb',
                    data: [70, 11, 180, 40],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        '#48bfe3',
                        '#eddcd2',
                        '#00b4d8'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'March',
                    fillcolor: '#2a9d8f',
                    data: [60, 100,  60, 60],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        '#48bfe3',
                        '#b5838d',
                        '#e85d04'
                    ],
                    borderWidth: 3
                },
                {
                    label: 'Apr',
                    fillcolor: '#b5838d',
                    data: [],
                    backgroundColor: [
                    ],
                    borderWidth: 4
                }

            ]
        })

    useEffect(() => {
        chart()
    }, [])
    return(
        <div className="graph">
            <Bar style={{height: '500px'}}  data={chartData} options={{
                reponsive: true,
                title: {text: 'Progress', display:true},
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                autoSkip: true,
                                maxTicks: 10,
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true,
                            }
                        }
                    ]
                }
            }}/>

        </div>
    )
}

export default Graph;
