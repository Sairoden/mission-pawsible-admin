// Styles
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";

// UI Components
import { Heading } from "../../ui";

// Contexts
import { useDarkMode } from "../../contexts/darkMode_context";

const startDataLight = [
  {
    pet: "Dog",
    value: 0,
    color: "#ef4444",
  },
  {
    pet: "Cat",
    value: 0,
    color: "#3b82f6",
  },
];

const startDataDark = [
  {
    pet: "Dog",
    value: 0,
    color: "#b91c1c",
  },
  {
    pet: "Cat",
    value: 0,
    color: "#1d4ed8",
  },
];

const lightColors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#a855f7",
];

const darkColors = [
  "#b91c1c",
  "#a16207",
  "#4d7c0f",
  "#15803d",
  "#0f766e",
  "#1d4ed8",
  "#7e22ce",
];

function prepareData(startData, pets) {
  const cats = pets.filter(pet => pet.petType === "Cat");
  const dogs = pets.filter(pet => pet.petType === "Dog");

  const data = startData.map(petData => {
    if (petData.pet === "Dog") petData.value = dogs.length;
    if (petData.pet === "Cat") petData.value = cats.length;

    return petData;
  });

  return data;
}

function DurationChart({ petStats }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, petStats);

  return (
    <ChartBox>
      <Heading as="h2">Registered Pets</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="pet"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map(entry => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.pet} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

export default DurationChart;
