import React from "react";
import { Typography } from "@mui/joy";
import { Stack } from "@mui/system";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const GraphPanel = ({ experiment, experimentName }) => {
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

  return (
    <Stack sx={{ marginTop: "20px" }}>
      <Typography
        level="h3"
        sx={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold" }}
      >
        {experimentName}
      </Typography>
    </Stack>
  );
};

export default GraphPanel;
