import React, { useState } from "react";
import { Container, Unstable_Grid as Grid } from "@mui/system";
import { GraphPanel, FiltersPanel, PropertiesPanel } from "../../components";

import "./style.css";
import data from "../../data/experimentData.json";

const Home = () => {
  const [selectedExperiment, setSelectedExperiment] = useState({});
  const [experimentName, setExperimentName] = useState({});
  const [output1, setOutput1] = useState({});
  const [output2, setOutput2] = useState({});
  const [graphType, setGraphType] = useState({});

  const setExperiment = (experimentName) => {
    setSelectedExperiment(data[experimentName]);
    setExperimentName(experimentName);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid xs={3} className="height-full">
          <PropertiesPanel experiment={selectedExperiment} />
        </Grid>
        <Grid xs={6} className="height-full">
          <GraphPanel
            experiment={selectedExperiment}
            experimentName={experimentName}
            graphType={graphType}
            output1={output1}
            output2={output2}
          />
        </Grid>
        <Grid xs={3} className="height-full">
          <FiltersPanel
            setSelectedExperiment={setExperiment}
            setOutput1={setOutput1}
            setOutput2={setOutput2}
            experiments={data}
            setGraphType={setGraphType}
            output1={output1}
            output2={output2}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
