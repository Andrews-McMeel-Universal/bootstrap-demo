import React from "react";
import is from "is_js";

import Fill from "../../components/commons/Fill";
import Grid from "../../components/modules/Grid";

const ResponsiveNoGuttersSection = () => (
  <Grid fluid>
    <Grid.Row height={500} noGutters>
      {[...Array(12)].map((e, i) => {
        return (
          <Grid.Column key={i}>
            <Fill dark={is.even(i)} />
          </Grid.Column>
        );
      })}
    </Grid.Row>
  </Grid>
);

export default ResponsiveNoGuttersSection;
