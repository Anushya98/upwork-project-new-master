// import React from 'react'

// function chart() {
//   return (
//     <div>
//         <header className='chart-header'>
//             Projects Overview
//         </header>
//          <iframe title='myframe' style={{background: "#FFFFFF",border: "none", borderradius: "2px",boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" ,width:"75vw" ,height:"35vw" }}
//          src="https://charts.mongodb.com/charts-sub-imkdf/embed/charts?id=63e34ccf-7312-4f69-85a3-de17802ebbcb&maxDataAge=3600&theme=light&autoRefresh=true" alt="">
//          </iframe>
//          <iframe title='pieframe' style={{background:"#FFFFFF",border: "none",borderradius: "2px",boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" ,width:"25vw" ,height:"30vw" }} 
//          src="https://charts.mongodb.com/charts-sub-imkdf/embed/charts?id=6437cec6-6e4c-4224-8450-d203917eb59d&maxDataAge=3600&theme=light&autoRefresh=true" alt ="">

//          </iframe>
//     </div>
//   )
// }

// export default chart



// import React, {useState, useEffect } from "react";
// import Chart from "react-apexcharts";
// import axios from 'axios';
// import ApexCharts from "apexcharts";

// const chart = () => {
//   const [id, setid]= useState();
//   const [state, setState]= useState();

//   useEffect(() => {

//     const Month=[];
//     const TotalProject = [];

//     const getProjects= async()=>{
//       const dataReq= await fetch("http://localhost:3000");
//       const dataRes= await dataReq.json();
//       //console.log(dataRes);

//       for(let i=0; i<dataRes.length; i++)
//       {
//         id.push(dataRes[i].id_number);
//         state.push(dataRes[i].state_number);

//       }
//       setid(id);
//       setState(state);
//  }
//   getProject();

//   },[]);
  
//   return (
//     <React.Fragment>
//       <div className="container-fluid mb-5">
//         <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>
      
//         <Chart
//           type="bar"
//           width={1380}
//           height={700}
//           series={[
//             {
//               name: "month",
//               data: count,
//             },
//           ]}
//           options={{
//             title: {
//               text: "Total projects",
//               style: { fontSize: 30 },
//             },

//             subtitle: {
//               text: "This is BarChart Graph",
//               style: { fontSize: 18 },
//             },

//             colors: ["#f90000"],
//             theme: { mode: "light" },

//             xaxis: {
//               tickPlacement: "on",
//               categories: state,
//               title: {
//                 text: "projects",
//                 style: { color: "#f90000", fontSize: 30 },
//               },
//             },

//             yaxis: {
//                 labels: {
//                   formatter: (val) => {
//                   return `${val}`;
//                   },
//                 style: { fontSize: "15", colors: ["#f90000"] },
//               },
//                  title: {
//                  text: "projects",
//                  style: { color: "#f90000", fontSize: 15 },
//               },
//             },

//             legend: {
//               show: true,
//               position: "right",
//             },

//             dataLabels: {
//               formatter: (val) => {
//                 return `${val}`;
//               },
//               style: {
//                 colors: ["#f4f4f4"],
//                 fontSize: 15,
//               },
//             },
//           }}
//         ></Chart>
//       </div>
//     </React.Fragment>
//   );
// }

// export default chart;


