import React from "react";

import Fill from "../../components/commons/Fill";
import Grid from "../../components/modules/Grid";
import Heading from "../commons/Heading";

const AdaptiveSection = () => (
  <>
    <Grid>
      <Grid.Column col={6}>
        <Heading priority={2}>Gutters: 16px - Name: Grid Default</Heading>
      </Grid.Column>
    </Grid>
    <Grid height={300}>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i} col={1}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid>
      <Grid.Column col={12}>
        <Heading priority={2}>Gutters: 12px - Name: Grid 3</Heading>
      </Grid.Column>
    </Grid>
    <Grid gx={3} height={300}>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i} col={1}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid>
      <Grid.Column col={12}>
        <Heading priority={2}>Gutters: 8px - Name: Grid: 2</Heading>
      </Grid.Column>
    </Grid>
    <Grid gx={2} height={300}>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i} col={1}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid>
      <Grid.Column col={12}>
        <Heading priority={2}>Gutters: 4px - Name: Grid 1</Heading>
      </Grid.Column>
    </Grid>
    <Grid gx={1} height={300}>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i} col={1}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
  </>
);

export default AdaptiveSection;
