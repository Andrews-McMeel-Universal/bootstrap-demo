import React from "react";

import useBreakpoint from "../../hooks/useBreakpoint";

import Fill from "../../components/commons/Fill";
import Grid from "../../components/modules/Grid";
import Heading from "../commons/Heading";

const AdaptiveSection = () => (
  <>
    <Grid height={300} mb={3}>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i} col={1}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid height={300} mb={3}>
      {[...Array(6)].map((e, i) => {
        return (
          <Grid.Column key={i} col={2}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid height={300} mb={3}>
      {[...Array(4)].map((e, i) => {
        return (
          <Grid.Column key={i} col={3}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid height={300} mb={3}>
      {[...Array(3)].map((e, i) => {
        return (
          <Grid.Column key={i} col={4}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
    <Grid height={300} mb={3}>
      {[...Array(2)].map((e, i) => {
        return (
          <Grid.Column key={i} col={6}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid>
  </>
);

export default AdaptiveSection;
