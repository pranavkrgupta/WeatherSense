import React, { useRef, useEffect } from "react";
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

const TemperatureChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, "red");
      gradient.addColorStop(1, "yellow");

      chart.data.datasets[0].borderColor = gradient;
      chart.update();
    }
  }, [data]);

  const options = {
    responsive: true,
    // aspectRatio: 3,
    tension: 0.3,
    plugins: {
      datalabels: {
        align: "top",
        formatter: function (value) {
          return value + "°C";
        },
        color: "white",
      },
    },

    scales: {
      y: {
        min: 30,
        max: 45,
        ticks: {
          maxTicksLimit: 2,
        },
        // display: false,
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "white",
          // maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const chartData = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: "Temperature",
        data: data.map((item) => item.temperature),
        borderWidth: 2,
        fill: false,
        pointRadius: 3,
      },
    ],
  };

  return <Line ref={chartRef} data={chartData} options={options} />;
};

export default TemperatureChart;
