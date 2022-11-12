import React from "react";
import { Typography } from "@mui/joy";
import { Stack, Box } from "@mui/system";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

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

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function createInputLineChart(inputVals, inputNames, temp, experimentName) {
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          "Experiment " +
          experimentName +
          " performed at " +
          temp +
          " degrees fahrenheit",
      },
    },
  };
  let labels = inputNames;
  let data = {
    labels,
    datasets: [
      {
        label: "Input",
        data: inputVals,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

function createOutputLineChart(
  outputVals,
  outputNames,
  experimentName,
  viscosity
) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          "Experiment " + experimentName + " output. Viscosity: " + viscosity,
      },
    },
  };
  let labels = outputNames;
  const data = {
    labels,
    datasets: [
      {
        label: "Output",
        data: outputVals,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

function createInputBarChart(inputVals, inputNames, temp, experimentName) {
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          "Experiment " +
          experimentName +
          " performed at " +
          temp +
          " degrees fahrenheit",
      },
    },
  };
  let labels = inputNames;
  let data = {
    labels,
    datasets: [
      {
        label: "Input",
        data: inputVals,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

function createOutputBarChart(
  outputVals,
  outputNames,
  experimentName,
  viscosity
) {
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          "Experiment " + experimentName + " output. Viscosity: " + viscosity,
      },
    },
  };
  let labels = outputNames;
  let data = {
    labels,
    datasets: [
      {
        label: "Input",
        data: outputVals,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

function createInputPieChart(inputVals, inputNames) {
  let data = {
    labels: inputNames,
    datasets: [
      {
        label: "Input",
        data: inputVals,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

function createOutputPieChart(outputVals, outputNames) {
  let data = {
    labels: outputNames,
    datasets: [
      {
        label: "Input",
        data: outputVals,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

function findInRange(output, outputRange, experiments) {
  let values = Object.values(experiments);
  let names = Object.keys(experiments);
  const inRange = [];
  for (let i = 0, size = Object.keys(experiments).length; i < size - 1; i++) {
    let currExperiment = values[i];
    let outputObj = values[i].outputs;
    for (const val in outputObj) {
      let outputName = val;
      let outputVal = outputObj[val];
      if (output === outputName) {
        if (outputRange[0] <= outputVal <= outputRange[1]) {
          inRange.push([names[i], currExperiment]);
        }
      }
    }
  }
  return inRange;
}

function renderGraph(
  graphType,
  experiment,
  output1,
  output2,
  outputRange1,
  outputRange2,
  experimentName,
  experiments,
  setOutputRange1,
  setOutputRange2,
  setOutput1,
  setOutput2
) {
  let inputVals = Object.values(experiment.inputs);
  let inputNames = Object.keys(experiment.inputs);
  let outputVals = Object.values(experiment.outputs);
  let outputNames = Object.keys(experiment.outputs);

  // Line chart
  if (graphType === "Line Chart") {
    // Remove outliers
    let temp = inputVals.pop();
    inputNames.pop();
    let viscosity = outputVals.shift();
    outputNames.shift();
    // Show input and output for line chart
    if (isEmpty(output1) && isEmpty(output2)) {
      const inputChart = createInputLineChart(
        inputVals,
        inputNames,
        temp,
        experimentName
      );
      const outputChart = createOutputLineChart(
        outputVals,
        outputNames,
        experimentName,
        viscosity
      );
      return [inputChart, outputChart];
      // Show inputs that produce outputs in a given range for line chart
    } else if (!isEmpty(output1) || !isEmpty(output2)) {
      // const chartsInRange = [];

      if (!isEmpty(output1)) {
        if (!isEmpty(outputRange1)) {
          const inRange = findInRange(output1, outputRange1, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];

            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            // Remove outliers
            let inRangeTemp = inRangeInputVals.pop();
            inRangeInputNames.pop();
            const inputChart = createInputLineChart(
              inRangeInputVals,
              inRangeInputNames,
              inRangeTemp,
              inRange[i][0]
            );
            return inputChart;
            // chartsInRange.append(inputChart);
          }
          setOutputRange1({});
          setOutput1({});
        }
      }

      if (!isEmpty(output2)) {
        if (!isEmpty(outputRange2)) {
          const inRange = findInRange(output2, outputRange2, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];

            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            // Remove outliers
            let inRangeTemp = inRangeInputVals.pop();
            inRangeInputNames.pop();
            const inputChart = createInputLineChart(
              inRangeInputVals,
              inRangeInputNames,
              inRangeTemp,
              inRange[i][0]
            );
            return inputChart;
            // chartsInRange.append(inputChart);
          }
          setOutputRange2({});
          setOutput2({});
        }
      }
      // return chartsInRange;
    }
    // Bar chart
  } else if (graphType === "Bar Chart") {
    // Remove outliers
    let temp = inputVals.pop();
    inputNames.pop();
    let viscosity = outputVals.shift();
    outputNames.shift();
    // Show input and output for Bar chart
    if (isEmpty(output1) && isEmpty(output2)) {
      const inputChart = createInputBarChart(
        inputVals,
        inputNames,
        temp,
        experimentName
      );
      const outputChart = createOutputBarChart(
        outputVals,
        outputNames,
        experimentName,
        viscosity
      );
      return [inputChart, outputChart];
      // Show inputs that produce outputs in a given range for bar chart
    } else if (!isEmpty(output1) || !isEmpty(output2)) {
      // const chartsInRange = [];

      if (!isEmpty(output1)) {
        if (!isEmpty(outputRange1)) {
          const inRange = findInRange(output1, outputRange1, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];

            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            // Remove outliers
            let inRangeTemp = inRangeInputVals.pop();
            inRangeInputNames.pop();
            const inputChart = createInputBarChart(
              inRangeInputVals,
              inRangeInputNames,
              inRangeTemp,
              inRange[i][0]
            );
            return inputChart;
            // chartsInRange.append(inputChart);
          }
          setOutputRange1({});
          setOutput1({});
        }
      }

      if (!isEmpty(output2)) {
        if (!isEmpty(outputRange2)) {
          const inRange = findInRange(output2, outputRange2, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];

            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            // Remove outliers
            let inRangeTemp = inRangeInputVals.pop();
            inRangeInputNames.pop();
            const inputChart = createInputBarChart(
              inRangeInputVals,
              inRangeInputNames,
              inRangeTemp,
              inRange[i][0]
            );
            return inputChart;
            // chartsInRange.append(inputChart);
          }
          setOutputRange2({});
          setOutput2({});
        }
      }
      // return chartsInRange;
    }
  } else if (graphType === "Pie Chart") {
    // Show input and output for line chart
    if (isEmpty(output1) && isEmpty(output2)) {
      const inputChart = createInputPieChart(inputVals, inputNames);
      const outputChart = createOutputPieChart(outputVals, outputNames);
      return [inputChart, outputChart];
    } else if (!isEmpty(output1) || !isEmpty(output2)) {
      // const chartsInRange = [];

      if (!isEmpty(output1)) {
        if (!isEmpty(outputRange1)) {
          const inRange = findInRange(output1, outputRange1, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];

            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            const inputChart = createInputPieChart(
              inRangeInputVals,
              inRangeInputNames
            );
            return inputChart;
            // chartsInRange.append(inputChart);
          }
          setOutputRange1({});
          setOutput1({});
        }
      }

      if (!isEmpty(output2)) {
        if (!isEmpty(outputRange2)) {
          const inRange = findInRange(output2, outputRange2, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];

            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            const inputChart = createInputPieChart(
              inRangeInputVals,
              inRangeInputNames
            );
            return inputChart;
            // chartsInRange.append(inputChart);
          }
          setOutputRange2({});
          setOutput2({});
        }
      }
      // return chartsInRange;
    }
  }
}

const GraphPanel = ({
  experiments,
  experiment,
  experimentName,
  graphType,
  output1,
  output2,
  outputRange1,
  outputRange2,
  setOutputRange1,
  setOutputRange2,
}) => {
  console.log(outputRange1);

  if (isEmpty(experiment) || isEmpty(graphType)) {
    return (
      <div className="selectInputText">
        <Typography
          level="h5"
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          Select an experiment and graph type
        </Typography>
      </div>
    );
  }

  return (
    <Stack sx={{ marginTop: "20px" }}>
      <Typography
        level="h3"
        sx={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold" }}
      >
        nSights
      </Typography>
      <Box
        sx={{
          marginLeft: "1em",
          marginRight: "1em",
          overflow: "scroll",
          maxHeight: "90vh",
        }}
      >
        {renderGraph(
          graphType,
          experiment,
          output1,
          output2,
          outputRange1,
          outputRange2,
          experimentName,
          experiments,
          setOutputRange1,
          setOutputRange2
        )}
      </Box>
    </Stack>
  );
};

export default GraphPanel;
