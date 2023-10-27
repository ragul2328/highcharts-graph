import React from 'react';
import Highcharts from 'highcharts';
import Highcahrtsreact, { HighchartsReact } from 'highcharts-react-official';
export default function App() {
  const options={
    chart:{
      type:'column'
    },
    title:{
      text:' No of Candidates Palced in MNC company'
    },
    xAxis:{
      categories:['TCS','Wibro','HCL','Infosys','Tech mahidra','cognizant','IBM india']
    },
    yAxis:{
      title:{
        text: 'No Of Placed candidates' 
      }
    },
    series:[
      {
        name:'Boys',
        data:[20 ,30,15,45,50,25,35],
        color:'orange'
      },
      {
        name:'Girls',
        data:[30,20,45,15,50,33,21],
        color:'blue'
      }
    ]
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
  );
}
