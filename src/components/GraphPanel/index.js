import React from "react";
import { Typography } from "@mui/joy";
import { Stack } from "@mui/system";

const GraphPanel = () => {
  return (
    <Stack>
      <Typography
        level="h5"
        sx={{ paddingBottom: "10px", textAlign: "center" }}
      >
        Experiment Name
      </Typography>
    </Stack>
  );
};

export default GraphPanel;
