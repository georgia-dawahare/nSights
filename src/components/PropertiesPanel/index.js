import React from "react";
import { Chip, Card, Divider, Typography } from "@mui/joy";
import { Stack } from "@mui/system";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import "./style.css";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const PropertiesPanel = ({ experiment }) => {
  if (isEmpty(experiment)) {
    return (
      <div className="selectInputText">
        <Typography
          level="h5"
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          Select an experiment
        </Typography>
      </div>
    );
  }

  const inputs = Object.entries(experiment?.inputs).map((input) => {
    return <PropertyInput key={input} input={input} />;
  });

  return (
    <Stack sx={{ marginTop: "20px" }}>
      <Card variant="soft" id="propertiesContainer" color="primary">
        <Typography
          level="h3"
          sx={{
            marginBottom: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Properties
        </Typography>
        <Divider inset="none" />
        <Stack sx={{ marginTop: "20px" }} spacing={1}>
          {inputs}
        </Stack>
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

export default PropertiesPanel;
