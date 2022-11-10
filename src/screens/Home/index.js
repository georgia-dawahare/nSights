import React, { useState } from "react";
import { Container, Unstable_Grid as Grid } from "@mui/system";
import { GraphPanel, FiltersPanel, PropertiesPanel } from "../../components";

import "./style.css";
import data from "../../data/experimentData.json";

const Home = () => {
  const [selectedExperiment, setSelectedExperiment] = useState({});

  const setExperiment = (experimentName) => {
    setSelectedExperiment(data[experimentName])
  }
  
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid xs={3} className="height-full">
          <PropertiesPanel experiment={selectedExperiment}/>
      </Grid>
      <Grid xs={6} className="height-full">
        <GraphPanel />
      </Grid>
      <Grid xs={3} className="height-full">
        <FiltersPanel setSelectedExperiment={setExperiment} experiments={data}/>
      </Grid>
    </Grid>
    </Container>
  );
};

export default Home;
