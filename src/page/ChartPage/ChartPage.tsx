import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugin: {
    legend: { position: 'top' as const },
    title: {
      display: true,
      text: 'Sales',
    },
  },
  responsive: true,
};

const labels = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
const valueChart = [10, 12, 8, 18, 25, 22, 40, 35, 80, 70, 100];

const valueColor = valueChart.map((value) => {
  if (value < 25) {
    return 'red';
  } else if (value >= 25 && value < 75) {
    return 'yellow';
  } else {
    return 'green';
  }
});

const datasets = [
  {
    backgroundColor: valueColor,
    borderColor: 'rgb(255, 99, 132)',
    borderRadius: 10,
    data: valueChart,
    label: 'Sales',
  },
];

const dataDoughnut = {
  datasets: [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: valueChart,
      label: 'Doughnut Sales',
    },
  ],
  labels,
};

const chartData = {
  datasets,
  labels,
};
export const ChartPage = () => {
  return (
    <div className="container mx-auto pt-24">
      <div className="flex h-1/2">
        <div className=" w-1/2">
          <Bar data={chartData} options={options} />
        </div>
        <div className="h-1/6 w-1/2">
          <Doughnut className=" w-2/6" data={dataDoughnut} />
        </div>
      </div>
      <div>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};
