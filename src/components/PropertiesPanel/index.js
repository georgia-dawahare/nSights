import React from "react";
import { Box, Chip, Card, Typography } from "@mui/joy";
import { Stack } from "@mui/system";

import EqualizerIcon from "@mui/icons-material/Equalizer";
import "./style.css";
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
const PropertiesPanel = ({ experiment }) => {
  if (isEmpty(experiment)) {
    return <p>Select an experiment</p>;
  }
  const inputs = Object.entries(experiment?.inputs).map((input) => {
    return <PropertyInput key={input} input={input} />;
  });

  return (
    <Stack>
      <Typography
        level="h5"
        sx={{ paddingBottom: "10px", textAlign: "center" }}
      >
        Properties
      </Typography>
      <Card variant="soft" id="propertiesContainer">
        <Stack spacing={1}>{inputs}</Stack>
      </Card>
    </Stack>
  );
};

const PropertyInput = ({ input }) => {
  return (
    <div className="propertyInput">
      <Chip size="sm">
        <EqualizerIcon />
      </Chip>
      <Typography level="body1">{input[0]}:</Typography>
      <Typography level="body2">{input[1]}</Typography>
    </div>
  );
};

const data = {
  "Polymer 1": 10.9,
  "Polymer 2": 12.2,
  "Polymer 3": 0.0,
  "Polymer 4": 10.1,
  "Carbon Black High Grade": 0.0,
  "Carbon Black Low Grade": 0.0,
  "Silica Filler 1": 11.4,
  "Silica Filler 2": 30.0,
  "Plasticizer 1": 16.9,
  "Plasticizer 2": 0.0,
  "Plasticizer 3": 0.0,
  Antioxidant: 0.0,
  "Coloring Pigment": 2.2,
  "Co-Agent 1": 0.0,
  "Co-Agent 2": 2.6,
  "Co-Agent 3": 2.4,
  "Curing Agent 1": 1.4,
  "Curing Agent 2": 0.0,
  "Oven Temperature": 425.0,
};

export default PropertiesPanel;
