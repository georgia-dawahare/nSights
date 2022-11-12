import React, { useState } from "react";
import { Card, Button, Typography, Slider, Divider } from "@mui/joy";
import { Stack, Box } from "@mui/system";

import Dropdown from "../Dropdown";
import "./style.css";

function valuetext(value) {
  return `${value}°C`;
}

const FiltersPanel = ({
  experiments,
  setSelectedExperiment,
  setOutput1,
  setOutput2,
  setGraphType,
}) => {
  const names = Object.keys(experiments);
  const values = Object.values(experiments);
  const outputs = values[0].outputs;
  const outputList = Object.keys(outputs); // Since the outputs are the same for each experiment, can use the outputs for the first experiment

  const [value1, setValue1] = useState([0, 40]);
  const [value2, setValue2] = useState([0, 40]);

  const graphType = ["Line Chart", "Bar Chart", "Scatter Chart"];

  const updateRange1 = (e, data) => {
    setValue1(data);
  };

  const updateRange2 = (e, data) => {
    setValue2(data);
  };

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
          <Card>
            <Dropdown
              label="Output 1:"
              options={outputList}
              callback={setOutput1}
            />
            <Box sx={{ width: 268 }}>
              <Slider
                getAriaLabel={() => "Output range 1"}
                value={value1}
                onChange={updateRange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </Card>
          <Card>
            <Dropdown
              label="Output 2:"
              options={outputList}
              callback={setOutput2}
            />
            <Box sx={{ width: 268 }}>
              <Slider
                getAriaLabel={() => "Output range 2"}
                value={value2}
                onChange={updateRange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
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
