import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import WidgetContent from "./WidgetContent";
import Select from "react-select"
import "./App.css";

import cloudAccountData from "./data/cloudAccountData.json"
import cloudRiskAssessmentData from "./data/cloudRiskAssessmentData.json"
import sourceData from "./data/sourceData.json";
import nograpghicon from "./Assets/no-graph.png"


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


const storageData = [
  { label: "critical", value: 20, color: "#83060B" },
  { label: "High", value: 20, color: "#E30E17" },
  { label: "Medium", value: 20, color: "#E3750E" },
  { label: "Low", value: 15, color: "#F4B400" },
  { label: "No Issues", value: 10, color: "#CDC8C3" }
];
const total = storageData.reduce((sum, item) => sum + item.value, 0);


const imageRiskStorageData = [
  { label: "Critical", value: 2, color: "#83060B" },
  { label: "High", value: 10, color: "#E30E17" },
  { label: "Medium", value: 30, color: "#E3750E" },
  { label: "Low", value: 15, color: "#F4B400" },
  { label: "No Issues", value: 5, color: "#CDC8C3" }
];
const totals = imageRiskStorageData.reduce((sum, item) => sum + item.value, 0);

export const App = () => {
  const [show, setShow] = useState(false)
  const [widgetRows, setWidgetRows] = useState([
    {
      status: false,
      contentId: 0,
      title: ""
    },
    {
      status: false,
      contentId: 0,
      title: ""
    },
    {
      status: false,
      contentId: 0,
      title: ""
    }
  ])
  const [widgetCheckBox, setWidgetCheckBox] = useState([
   {
      status: false,
      contentId: 0,
      title: ""
    },
    {
      status: false,
      contentId: 0,
      title: ""
    },
    {
      status: false,
      contentId: 0,
      title: ""
    }
  ])

  const onCheckHandle = (e, type = "", data = 0, index) => {
    const { value,checked=false } = e.target
    if (type === "check") {
      let rows = widgetCheckBox
      rows[index] = { ...rows[index], status: checked, contentId: data }
      setWidgetCheckBox(rows)
    }
    else if (type = "title") {
      let rows = widgetCheckBox
      rows[index] = { ...rows[index], title: value }
      setWidgetCheckBox(rows)
    }
  }

  const onSubmitHandle = () => {
    setWidgetRows(widgetCheckBox)
    setShow(false)
  }
  const oncancel = () => {
    setWidgetCheckBox(widgetRows)
    setShow(false)
  }
  // const Refresh = () => {
  //   const [refresh, setRefresh] = useState(0);
  // const handleRefresh = () => {
  //   setRefresh(0); // reset to default
  // };
  return (
    <div className="App container pt-5">
      <div className="row mb-3">
        <div className="col-6 mb-3">
          <h3>CNAPP Dashboard</h3>
        </div>
        <div className="col-6 d-flex justify-content-end my-5 gap-2">
          <button className="btn btn-light">Add Widget <i class="fa-solid fa-plus"></i></button>
          <button className="btn btn-light" ><i class="fa-solid fa-arrows-rotate"></i></button>
          <button className="btn btn-light"><i class="fa-solid fa-ellipsis-vertical"></i></button>
          <button className="btn btn-light"><i class="fa-solid fa-clock"></i></button>
          <Select>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</Select>
          
        </div>
      </div>
      <div className="row  ">
        <h4>CSPM Executive Dashboard</h4>
      </div>
      {/* first row data */}
      <div className="row pt-2 gap-5 my-1">
        <div className="cloudAccountCard cloudAccountCategoryCard col-4 d-flex justify-content-evently align-items-center">
          <div className="col-9">
            <Doughnut
              data={{
                labels: cloudAccountData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: cloudAccountData.map((data) => data.value),
                    backgroundColor: [
                      "rgba(168, 195, 245, 0.8)",
                      "rgba(43, 63, 229, 0.8)",
                    ],
                    borderColor: [
                      "rgba(168, 195, 245, 0.8)",
                      "rgba(43, 63, 229, 0.8)",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Cloud Account",
                  },
                  legend: {
                    display: false, // We'll use a custom legend
                  },
                },
              }}
            />
          </div>
          <div>
            <div className="col-auto pt-5 ">
              <div className="col-6 align-center">

              {cloudAccountData.map((label, index) => (
                <div className="row">
                  <span
                  className="col-3"
                    style={{
                      width: '12px',
                      height: '12px',
                      display: 'inline-block',
                      marginRight: '4px',
                      marginTop:"8px",
                      backgroundColor: `${label?.bg}`,
                    }}
                  ></span>
                  <span className="col-6 mb-1">

                  {label?.label}
                  </span>
                  <br />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>


        <div className="cloudAccountRiskAssessmentCard col-auto cloudAccountRiskAssessmentCategoryCard col-4 d-flex justify-content-evently align-items-center">
          <div className="col-9">
          <Doughnut
            data={{
              labels: cloudRiskAssessmentData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: cloudRiskAssessmentData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(18, 82, 18, 0.8)",
                    "rgba(217, 227, 246, 0.8)",
                    "rgba(217, 229, 43, 0.8)",
                    "rgba(237, 50, 22, 0.8)",
                  ],
                  borderColor: [
                    "rgba(18, 82, 18, 0.8)",
                    "rgba(217, 227, 246, 0.8)",
                    "rgba(217, 229, 43, 0.8)",
                    "rgba(237, 50, 22, 0.8)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Cloud Account Risk Assessment",
                },
                legend: {
                  display: false,
                }
              },
            }}
          />
          </div>
          <div className="col-auto pt-5">
            <div className="col-6 align-center">
              {cloudRiskAssessmentData.map((label, index) => (
                   <div className="row">
                   <span
                   className="col-3"
                     style={{
                       width: '12px',
                       height: '12px',
                       display: 'inline-block',
                       marginRight: '8px',
                       marginTop:"8px",
                       backgroundColor: `${label?.bg}`,
                     }}
                   ></span>
                   <span className="col-6 mb-1">
                   {label?.label}
                   </span>
                   <br />
                 </div>
               ))}
            </div>
          </div>
        </div>
       
        <WidgetContent setShow={setShow}
          widget={widgetRows[0]}
        />
        <div class={`offcanvas offcanvas-end ${show ? "show" : ""}`} tabindex="-1" >
          <div class="offcanvas-header bg-primary">
            <h5 class="offcanvas-title text-light" >Add Widget</h5>
            <button type="button" class="btn-close" onClick={() => { setShow(false) }}></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <p>Personalize your dashboard by adding the following widget</p>
              <div class="header__nav__option">
                <nav class="header__nav__menu mobile-menu">
                  <ul>
                    <li class="active"><a href="#">CSPM</a></li>
                    <li><a href="#">CWPP</a></li>
                    <li><a href="#">Image</a></li>
                    <li><a href="#">Ticket</a></li>
                  </ul>
                </nav>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" onChange={(e) => onCheckHandle(e, "check", 0, 0)} aria-label="Checkbox for following text input" />
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" onChange={(e) => onCheckHandle(e, "title", 0, 0)} placeholder="widget 1" />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => onCheckHandle(e, "check", 0, 1)} />
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="widget 2" onChange={(e) => onCheckHandle(e, "title", 0, 1)} />
              </div>
               <div class="input-group mb-3">
                <div class="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => onCheckHandle(e, "check", 0, 2)} />
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="widget 2" onChange={(e) => onCheckHandle(e, "title", 0, 2)} />
              </div>
            </div>
          </div>
          <div class=" d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary mx-2" onClick={() => { oncancel() }}>Close</button>
            <button type="button" class="btn btn-primary mx-2" onClick={() => { onSubmitHandle() }}> confirm</button>
          </div>
        </div>
        {show && <div className="backdrop" onClick={() => setShow(false)}> </div>}



      </div>
      <br /><br />
      {/* second row data */}
      <div className="row">
        <h4>CSPM Executive Dashboard</h4>
      </div>
      <div className="row gap-5 my-1">
        <div className="nameSpaceCard col-auto nameSpaceCategoryCard">
          <p className="chart-title">Top 5 Namespace Specific Alert</p>
          <div className="noChartSet text-center">
            <div>
              <i class="fa-solid fa-chart-simple"></i>
              <p className="text-center">No Graph data available</p>
            </div>
          </div>

        </div>
        <div className="nameSpaceCard col-auto nameSpaceCategoryCard">
          <p className="chart-title">Workload Alert</p>
          <div className="noChartSet text-center">
            <div>
              <i class="fa-solid fa-chart-simple"></i>
              <p className="text-center">No Graph data available</p>
            </div>
          </div>

        </div>


        

        <WidgetContent setShow={setShow}
          widget={widgetRows[1]}
        />


      </div>
<br /><br />
      {/* third row data */}
      <div className="row">
        <h4>Registry Scan</h4>
      </div>
      <div className="row pt-2 gap-5 my-1">
        <div className="cloudAccountCard col-auto cloudAccountCategoryCard">


          <div className="mb-3">
            <h6 className="chart-title">Image Risk Assessment </h6>
          </div>
          <div style={{ width: "100%", height: "20px", display: "flex", borderRadius: "10px", overflow: "hidden" }}>
            {imageRiskStorageData.map((item, index) => (
              <>
                <div
                  key={index}
                  style={{
                    width: `${(item.value / totals) * 100}%`,
                    backgroundColor: item.color,
                    height: "100%",
                  }}
                />
              </>
              

            ))}
          </div>
          <div className="col-auto pt-5 ">
              <div className="col-12 align-center">

                <div className="row">
              {sourceData.map((label, index) => (
                <div className="col-6">
                  <span
                  className="col-3"
                    style={{
                      width: '12px',
                      height: '12px',
                      display: 'inline-block',
                      marginRight: '4px',
                      marginTop:"8px",
                      backgroundColor: `${label?.bg}`,
                    }}
                  ></span>
                  <span className="col-6 mb-1">

                  {label?.label}
                  </span>
                  <br />
                </div>
                ))}
                </div>
              </div>
            </div>





        </div>
        <div className="cloudAccountRiskAssessmentCard col-auto cloudAccountRiskAssessmentCategoryCard">
          <div className="mb-3">
            <h6>Image Security Issues</h6>
          </div>
          <div style={{ width: "100%", height: "20px", display: "flex", borderRadius: "10px", overflow: "hidden" }}>
            {storageData.map((item, index) => (
              <>
                <div
                  key={index}
                  style={{
                    width: `${(item.value / total) * 100}%`,
                    backgroundColor: item.color,
                    height: "100%",
                  }}
                />
              </>

            ))}
          </div>
          <div className="col-auto pt-5 ">
              <div className="col-12 align-center">

                <div className="row">
              {sourceData.map((label, index) => (
                <div className="col-6">
                  <span
                  className="col-3"
                    style={{
                      width: '12px',
                      height: '12px',
                      display: 'inline-block',
                      marginRight: '4px',
                      marginTop:"8px",
                      backgroundColor: `${label?.bg}`,
                    }}
                  ></span>
                  <span className="col-6 mb-1">

                  {label?.label}
                  </span>
                  <br />
                </div>
                ))}
                </div>
              </div>
            </div>
        </div>
        



        <WidgetContent setShow={setShow} 
        widget={widgetRows[2]}
        />
      </div>




    </div>
  );
};
// };

