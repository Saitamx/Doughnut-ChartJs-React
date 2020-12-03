import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

export default function Grafico() {
  const [barData, setBarData] = useState({
    labels: [
      "Trabajar",
      "Comer",
      "Andar en bicicleta",
      "Ver televisión",
      "Sleep",
    ],
    datasets: [
      {
        data: [8, 2, 2, 2, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderWidth: 3,
      },
    ],
  });
  // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: true,
        text: "Mis Hobbies",
        fontSize: 25,
      },
      legend: {
        display: true,
        position: "right",
      },
    },
  });

  return (
    <div className="BarExample">
      <Doughnut data={barData} options={barOptions.options} />
    </div>
  );
}
