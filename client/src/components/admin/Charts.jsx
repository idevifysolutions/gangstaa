import Chart from "chart.js/auto"
import { CategoryScale, plugins } from "chart.js"

import { Bar, Doughnut } from "react-chartjs-2"

Chart.register(CategoryScale)

const months = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = ({ data_1 = [], data_2 = [], title_1, title_2, bgColor_1, bgColor_2, horizontal = false, labels = months }) => {
    const data = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4,
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgColor_2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4,
            },

        ]
    }
    const options = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };
    return <Bar data={data} options={options} />
}

export const DoughnutChart = ({ labels = ["Male", "Female"], offset, legends = true }) => {
    const data = {
        labels,
        datasets: [
            {
                data: [11, 10],
                backgroundColor: ["red", "yellow"],
                borderWidth: 0,
                offset
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: "bottom",
                labels: {
                    padding: 40
                },
            },
        },
        cutout: 90
    }

    return <Doughnut data={data} options={options} />
}

