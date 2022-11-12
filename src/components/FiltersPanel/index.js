import React, { useState } from "react";
import { Card, Button, Typography, Slider, Divider } from "@mui/joy";
import { Stack, Box } from "@mui/system";

import Dropdown from "../Dropdown";
import "./style.css";

// Find the min and max range for a slider given an output name
function findRange(outputName, values) {
  var maxRange = 0;
  var minRange = 0;
  for (let i = 0, size = Object.keys(values).length; i < size - 1; i++) {
    let currOutputVals = values[i].outputs;

    if (currOutputVals[outputName] > maxRange) {
      maxRange = currOutputVals[outputName];
    } else if (currOutputVals[outputName] < minRange) {
      minRange = currOutputVals[outputName];
    }
  }
  return [minRange, maxRange];
}

const FiltersPanel = ({
  experiments,
  setSelectedExperiment,
  setOutput1,
  setOutput2,
  setGraphType,
  output1,
  output2,
}) => {
  const names = Object.keys(experiments); // Experiment names
  const values = Object.values(experiments); // values of experiments (inputs and outputs)
  const outputtNames = values[0].outputs; // output names
  const outputList = Object.keys(outputtNames); // Since the outputs are the same for each experiment, can use the outputs for the first experiment

  // states to change the value of the sliders
  const [sliderValue1, setSliderValue1] = useState([0, 100]);
  const [sliderValue2, setSliderValue2] = useState([0, 100]);

  // List of graph types
  const graphType = ["Line Chart", "Bar Chart", "Scatter Chart"];

  // functions to update the sliders
  const updateSlider1 = (e, data) => {
    setSliderValue1(data);
  };
  const updateSlider2 = (e, data) => {
    setSliderValue2(data);
  };

  // Define max range value based on output selected
  if (typeof output1 === "string" && output1.length !== 0) {
    var range1 = findRange(output1, values);
    console.log(range1);
  } else {
    range1 = [0, 0];
  }
  if (typeof output2 === "string" && output2.length !== 0) {
    var range2 = findRange(output2, values);
    console.log(range2);
  } else {
    range2 = [0, 0];
  }

  return (
    <Stack sx={{ marginTop: "20px" }}>
      <Card variant="soft" color="primary">
        <Typography
          level="h3"
          sx={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold" }}
        >
          Filters
        </Typography>
        <Divider inset="none" />
        <Typography
          level="h4"
          sx={{
            paddingBottom: "10px",
            marginTop: "10px",
            fontWiehgt: "bold",
          }}
        >
          General
        </Typography>
        <Stack spacing={2.5}>
          <Dropdown
            label="Experiment Name"
            options={names}
            callback={setSelectedExperiment}
          />
          <Dropdown
            label="Graph Type"
            options={graphType}
            callback={setGraphType}
          />
        </Stack>

        <Typography
          level="h4"
          sx={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold" }}
        >
          By Output
        </Typography>

        <Stack spacing={2.5}>
          {/* Filter by output 1 */}
          <Card>
            <Dropdown
              label="Output 1:"
              options={outputList}
              callback={setOutput1}
              placeholder="optional"
            />
            <Box sx={{ width: 268 }}>
              <Slider
                getAriaLabel={() => "Output range 1"}
                value={sliderValue1}
                onChange={updateSlider1}
                valueLabelDisplay="auto"
                max={range1[1]}
                min={range1[0]}
              />
            </Box>
          </Card>

          {/* Filter by output 2 */}
          <Card>
            <Dropdown
              label="Output 2:"
              options={outputList}
              callback={setOutput2}
              placeholder="optional"
            />
            <Box sx={{ width: 268 }}>
              <Slider
                getAriaLabel={() => "Output range 2"}
                value={sliderValue2}
                onChange={updateSlider2}
                valueLabelDisplay="auto"
                max={range2[1]}
                min={range2[0]}
              />
            </Box>
          </Card>
        </Stack>
        <Button sx={{ marginTop: "2em" }} onClick={() => {}}>
          Filter
        </Button>
      </Card>
    </Stack>
  );
};

export default FiltersPanel;
