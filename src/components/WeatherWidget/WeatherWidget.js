import React, { memo } from "react";
import { Box, Grid, Container } from "@mui/material";

// import { HeaderNav } from "../../components";

import { Day } from "./styled";

const WeatherWidget = memo((props) => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ display: "flex", position: "relative" }}>
        <Day>
          <Box>
            <div>Hi</div>
          </Box>
        </Day>
        <Day>
          <div>Hello</div>
        </Day>
      </Container>
    </Box>

    // <Container>
    //   <Logo />
    //   <HeaderNav />
    // </Container>
  );
});

WeatherWidget.displayName = "WeatherWidget";

export { WeatherWidget };
