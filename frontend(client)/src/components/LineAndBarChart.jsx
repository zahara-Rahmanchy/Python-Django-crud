import React, { useContext, useState } from 'react'
import { DataContext } from '../provider/DataContext';
import moment from 'moment';
import 'chartjs-adapter-moment';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  } from 'chart.js/auto';
import { Bar, Chart, Line } from 'react-chartjs-2';
const LineAndBarChart = ({selectedTradeCode}) => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );
    const { data } = useContext(DataContext);
    const sortedData = [...data]; 
    

    sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    const alldates = [];
    const closeValues = [];
    const volumeValues = [];

  sortedData.forEach((entry) => {
    const formattedDate = moment(entry.date).format('YYYY-MM-DD')
    alldates.push(formattedDate);
    closeValues.push(entry.close);
    // volumeValues.push(entry.volume);
    if (!selectedTradeCode || entry.trade_code === selectedTradeCode) {
      // Only add volume values that match the selected trade_code or if no trade_code is selected
      volumeValues.push(entry.volume);
  }
  });

 
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x:{
      type:'time',
      title: {
        display: true,
        text: 'Date',
        font: {
          size: 24,    // Set the font size
           
        },
        color: 'blue'
      },
      ticks: {
        color: 'blue', // Set the color for x-axis tick values
      }, time: {
        unit: 'day', // Set the time unit to 'day', adjust as needed (e.g., 'month', 'year')
        tooltipFormat: 'YYYY-MM-DD', // Format for tooltips
      },
      
    },
   
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
            display: true,
            text: 'Close Value',
            font: {
              size: 22,    // Set the font size
               
            },
       color:"purple"
      },
      ticks: {
        color: 'blue', // Set the color for x-axis tick values
        autoSkip: true,
        autoSkipPadding: 20
      },
    
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Volume',
        font: {
          size: 22,    // Set the font size
           
        },
        color:"salmon"
      },
      ticks: {
        color: 'blue', // Set the color for x-axis tick values
      },
      
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  grid: {
    display: false,
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const labelIndex = context.dataIndex;
          const date = alldates[labelIndex];
          const close = closeValues[labelIndex];
          const volume = volumeValues[labelIndex];
          return `Date: ${date}\nClose: ${close}\nVolume: ${volume}`;
        },
      },
    },
  },
};
const chartData = {
    labels: alldates,
    datasets: [
      {
        label: 'Close Value',
        type:'line',
        data: closeValues,
        fill:true,
        backgroundColor: 'pink',
        borderColor:'rgba(128, 0, 128,0.7)',
        // borderColor:rg 'b(75, 192, 192)',
        order:1,
        yAxisID:'y'
       
      },
      {
        label: 'Volume',
        type: 'bar',
        data: volumeValues,
        fill: true,
        backgroundColor: 'coral',
        barThickness: 15,
        order:2,
       
        yAxisID: 'y1',
      },
    ],
  };

 
  return (
    <div className='max-w-7xl mx-auto'>LineAndBarChart

        <div style={{width:"100%",height: "400px"}} className=''>
       
        <Chart data={chartData} options={chartOptions} type={['line', 'bar']} />
       
        </div>
    </div>
  )
}

export default LineAndBarChart


