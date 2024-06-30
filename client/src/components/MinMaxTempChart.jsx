import React from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartDataLabels
);

const MinMaxTempChart = ({ data }) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: function (value) {
          return value + "°C";
        },
        color: "white",
        font: {
          weight: "bold",
        },
        padding: {
          top: 10,
        },
        display: function (context) {
          return context.datasetIndex === 0 ? "auto" : false; // Display on first dataset (max temperature)
        },
        align: "top",
      },
    },
    tension: 0.4,
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 4,
        },
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const bottomLabels = {
    datalabels: {
      formatter: function (value) {
        return value + "°C";
      },
      color: "white",
      align: "bottom",
      offset: 10,
      display: function (context) {
        return context.datasetIndex === 1 ? "auto" : false; // Display on second dataset (min temperature)
      },
    },
  };

  const chartData = {
    labels: [
      "2024-06-30",
      "2024-07-01",
      "2024-07-02",
      "2024-07-03",
      "2024-07-04",
      "2024-07-05",
      "2024-07-06",
    ],
    datasets: [
      {
        label: "Max Temperature (°C)",
        data: [25.8, 20.8, 17.7, 20.6, 17, 22.2, 28],
        borderColor: "red",
        backgroundColor: "red",
        borderWidth: 2,
        fill: false,
        pointRadius: 3,
        datalabels: options.plugins.datalabels, // Apply top label settings
      },
      {
        label: "Min Temperature (°C)",
        data: [18, 14.4, 12.7, 13.2, 13.2, 12.6, 15.2],
        borderColor: "orange",
        backgroundColor: "orange",
        borderWidth: 2,
        fill: false,
        pointRadius: 3,
        datalabels: bottomLabels.datalabels, // Apply bottom label settings
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="chart">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MinMaxTempChart;
