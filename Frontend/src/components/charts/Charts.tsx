import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import './charts.scss';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const Charts = (): JSX.Element => {
  const commitData: number[] = [2, 4, 7, 10];
  const repoLabels: string[] = ['Repo 1', 'Repo 2', 'Repo 3', 'Repo 4'];

  const barData: ChartData<'bar'> = {
    labels: repoLabels,
    datasets: [
      {
        label: 'Commits',
        data: commitData,
        backgroundColor: '#a259ff',
        borderRadius: 5,
      },
    ],
  };

  const barOptions: ChartOptions<'bar'> = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const languageData: ChartData<'pie'> = {
    labels: ['JavaScript', 'HTML', 'CSS'],
    datasets: [
      {
        label: 'Language Usage',
        data: [60, 30, 10],
        backgroundColor: ['#f39c12', '#2980b9', '#2ecc71'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions: ChartOptions<'pie'> = {
    plugins: {
      legend: { position: 'right' },
    },
  };

  return (
    <>
      <h2 className="sectionTitle">Commits Overview</h2>
      <div className="chartWrapper">
        <Bar data={barData} options={barOptions} />
      </div>

      <h2 className="sectionTitle">Language Breakdown</h2>
      <div className="pieWrapper">
        <Pie data={languageData} options={pieOptions} />
      </div>
    </>
  );
};

export default Charts;
