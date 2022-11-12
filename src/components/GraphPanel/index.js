import React from "react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/joy";
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
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
);

// Function to check if given object is empty
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Function to create a line chart using input values
// Parameters:
//  inputVals, numberic values of input
//  inputNames, names of the input
//  temp, temperature of the given experiment
//  experimentName, name of given experiment
// Returns a line graph of given input
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

// Function to create a line chart using output values
// Parameters:
//  outputVals, numberic values of output
//  outputNames, names of the output
//  viscosity, viscosity of the given experiment
//  experimentName, name of given experiment
// Returns a line graph of given output
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

// Function to find if there are experiments that produce the given output at the given range
// Parameters:
//  output, name of the desired output
//  outputRange, desired range of output
//  experiments, all experiments (names, inputs, outputs)
// Return: a list of experiments that produce outputs in desired range
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

// Function that renders graphs
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
    // Remove outliers (displayed in text rather than in the graph)
    let temp = inputVals.pop();
    inputNames.pop();
    let viscosity = outputVals.shift();
    outputNames.shift();
    // If no desired output/output ranges are given, then show input and output line charts
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
      // Show inputs that produce specific output in a given range for line chart
      // BUG: Currently only displays at most 1 out of potentially many results
      // (currently having trouble with resetting the state)
    } else if (!isEmpty(output1) || !isEmpty(output2)) {
      // commented out code displays logic that would display all resulting graphs
      // const chartsInRange = [];
      if (!isEmpty(output1)) {
        if (!isEmpty(outputRange1)) {
          // Store list of valid experiments within range
          const inRange = findInRange(output1, outputRange1, experiments);
          // Loop over all the experiments in range
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];
            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);

            // Remove outliers
            let inRangeTemp = inRangeInputVals.pop();
            inRangeInputNames.pop();

            // Generate graph
            const inputChart = createInputLineChart(
              inRangeInputVals,
              inRangeInputNames,
              inRangeTemp,
              inRange[i][0]
            );

            return inputChart; // currently grabs the last valid experiment to display
            // Append to list of generated charts to display
            // chartsInRange.append(inputChart);
          }
          // BUG: Attempt to reset state; does not work
          setOutputRange1({});
          setOutput1({});
        }
      }
      // Do the same thing for output 2
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
            // Generate chart
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
      // Return all charts to display
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
      // Show inputs that produce specific output in a given range for bar chart
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
            // Generate chart
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
            // Generate chart
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
      // Show inputs that produce specific output in a given range for pie chart
    } else if (!isEmpty(output1) || !isEmpty(output2)) {
      // const chartsInRange = [];
      if (!isEmpty(output1)) {
        if (!isEmpty(outputRange1)) {
          const inRange = findInRange(output1, outputRange1, experiments);
          for (let i = 0, size = inRange.length; i < size - 1; i++) {
            let currExperiment = inRange[i][1];
            let inRangeInputVals = Object.values(currExperiment.inputs);
            let inRangeInputNames = Object.keys(currExperiment.inputs);
            // Generate chart
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
            // Generate chart
            const inputChart = createInputPieChart(
              inRangeInputVals,
              inRangeInputNames
            );
            // chartsInRange.append(inputChart);
            return inputChart;
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
  // Check if user has selected experiment AND graph type, prompt user to select both if not
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

// Modified examples from:
//  https://react-chartjs-2.netlify.app/examples
//  https://mui.com/joy-ui/getting-started/overview/
