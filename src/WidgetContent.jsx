import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
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


const WidgetContent = ({ widget={}, setShow = () => { } }) => {
    return (
        <>
            {
                widget?.status ? (
                    <>
                        {
                            widget?.contentId === 0 ? (
                                <div className="cloudAccountCard cloudAccountCategoryCard col-4 d-flex justify-content-evently align-items-center">
                                    <div>
                                        <Doughnut
                                            data={{
                                                labels: cloudAccountData.map((data) => data.label),
                                                datasets: [
                                                    {
                                                        label: "Count",
                                                        data: cloudAccountData.map((data) => data.value),
                                                        backgroundColor: [
                                                            "rgba(43, 63, 229, 0.8)",
                                                            "rgba(168, 195, 245, 0.8)",
                                                        ],
                                                        borderColor: [
                                                            "rgba(43, 63, 229, 0.8)",
                                                            "rgba(168, 195, 245, 0.8)",
                                                        ],
                                                    },
                                                ],
                                            }}
                                            options={{
                                                plugins: {
                                                    title: {
                                                        text: widget?.title,
                                                    },
                                                    legend: {
                                                        display: false, // We'll use a custom legend
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div className="col-6 align-center">
                                            {cloudAccountData.map((label, index) => (
                                                <>
                                                    <span
                                                        style={{
                                                            width: '12px',
                                                            height: '12px',
                                                            display: 'inline-block',
                                                            marginRight: '8px',
                                                            backgroundColor: `${label?.bg}`,
                                                        }}
                                                    ></span>
                                                    {label?.label}
                                                    <br />
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                    </>
                ) :
                    (
                        <div className="cloudAddCard col-auto cloudAddCategoryCard d-flex justify-content-center align-items-center">
                            <button class="btn btn-outline-secondary" type="button" onClick={() => { setShow(true) }}>
                                <i class="fa-solid fa-plus"></i> Add Widget
                            </button>
                        </div>
                    )
            }
        </>
    )
}

export default WidgetContent