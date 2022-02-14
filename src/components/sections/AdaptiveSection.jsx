import React from "react";

import Fill from "../../components/commons/Fill";
import Grid from "../../components/modules/Grid";

// import GridContextProvider from "../../components/modules/Grid/GridContext";

// import Grid from "../../components/modules/Grid/GridContext";

const AdaptiveSection = () => (
  <>
    {/* <Grid>
      <Grid.Row height={300}>
        {[...Array(12)].map((e, i) => {
          return (
            <Grid.Column key={i}>
              <Fill />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row height={300} gy={0} gx={4}>
        {[...Array(12)].map((e, i) => {
          return (
            <Grid.Column key={i}>
              <Fill />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row height={300} gy={0} gx={5}>
        {[...Array(12)].map((e, i) => {
          return (
            <Grid.Column key={i}>
              <Fill />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid> */}
    <Grid gx={5}>
      <Grid.Row height={300}>
        {[...Array(12)].map((e, i) => {
          return (
            <Grid.Column key={i}>
              <Fill />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
    <Grid gx={4}>
      <Grid.Row height={300}>
        {[...Array(12)].map((e, i) => {
          return (
            <Grid.Column key={i}>
              <Fill />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
    {/* <Grid gx={5}>
      <Grid.Row height={300}>
        {[...Array(18)].map((e, i) => {
          return (
            <Grid.Column key={i}>
              <Fill />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid> */}
  </>
);

export default AdaptiveSection;
