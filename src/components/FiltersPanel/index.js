import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

import Card from "@mui/joy/Card";
import { Stack } from "@mui/system";

import Dropdown from "../Dropdown";
import "./style.css";

const FiltersPanel = ({experiments, setSelectedExperiment}) => {
  const names = Object.keys(experiments);

  return (
    <Stack>
         <Typography
          level="h5"
          sx={{ paddingBottom: "10px", textAlign: "center" }}
        >Filters</Typography>
      <Card variant="soft">
        <Typography
          level="body1"
          sx={{ paddingBottom: "10px", textAlign: "center" }}
        >
          General
        </Typography>
        <Stack spacing={2.5}>
          <Dropdown label="Experiment Name" options={names} callback={setSelectedExperiment}/>
          <Dropdown label="Graph Plot" options={[]}/>
        </Stack>

        <Typography level="body1" sx={{ textAlign: "center" }}>
            By Output
        </Typography>
        <Stack spacing={2.5}>
          <Dropdown label="Output 1:" options={[]}/>
          <Dropdown label="Output 2" options={[]}/>
        </Stack>
        <Button sx={{marginTop: '2em'}} onClick={ () => {console.log("here")}}>Filter</Button>
      </Card>
    </Stack>
  );
};

export default FiltersPanel;
