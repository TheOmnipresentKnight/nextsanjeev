import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillsRadarProps {
  width: any;
  height: any;
}

const SkillsRadar: React.FC<SkillsRadarProps> = ({ width, height }) => {
  // Sample data for the Radar Chart
  const data = {
    labels: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "MongoDB",
      "Node.js",
      "JEST",
      "Postman",
      "Express.js",
      "React.js",
      "Next.js",
      "HTML and CSS",
      "Nx-monorepo",
      "Git",
      "Agile (SCRUM)",
      "CI/CD with Jenkins",
      "Docker",
      "AWS EC2",
      "Supervised ML",
      "Unsupervised ML",
      "Reinforcement ML",
    ],
    datasets: [
      {
        label: "Skill Level",
        data: [
          80, // JavaScript
          70, // TypeScript
          75, // Python
          60, // SQL
          65, // MongoDB
          80, // Node.js
          70, // JEST
          65, // Postman
          75, // Express.js
          85, // React.js
          80, // Next.js
          90, // HTML and CSS
          70, // Nx-monorepo
          85, // Git
          80, // Agile (SCRUM)
          70, // CI/CD with Jenkins
          75, // Docker
          70, // AWS EC2
          65, // Supervised ML
          60, // Unsupervised ML
          55, // Reinforcement ML
        ],

        borderColor: "rgba(75, 192, 192, 1)", // Line color (e.g., teal)
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color with transparency
      },
    ],
  };

  // Default options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "My Skills Radar Chart",
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.raw}`;
          },
        },
      },
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
        stepSize: 20,
      },
    },
  };

  return (
    <div>
      <h2>Skills Radar Chart</h2>
      <div style={{ width, height }}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

SkillsRadar.propTypes = {
  width: PropTypes.string.isRequired, // Width as a string, e.g., "300px"
  height: PropTypes.string.isRequired, // Height as a string, e.g., "200px"
};

export default SkillsRadar;
