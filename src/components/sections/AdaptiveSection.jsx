import React from "react";

import Fill from "../../components/commons/Fill";
import Grid from "../../components/modules/Grid";

const AdaptiveSection = () => (
  <Grid>
    <Grid.Row height={500}>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i}>
            <Fill />
          </Grid.Column>
        );
      })}
    </Grid.Row>
  </Grid>
);

export default AdaptiveSection;
