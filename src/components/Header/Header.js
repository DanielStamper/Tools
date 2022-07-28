import React, { memo } from "react";
import { AppBar, Link, Toolbar } from "@mui/material";

// import { HeaderNav } from "../../components";

// import { Container } from './styled';

const Header = memo((props) => {
  return (
    // <div>Hi</div>
    <div>
      <Toolbar>
        <AppBar>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            href="../"
            // sx={rightLink}
          >
            {"Home"}
          </Link>
        </AppBar>
      </Toolbar>
    </div>

    // <Container>
    //   <Logo />
    //   <HeaderNav />
    // </Container>
  );
});

Header.displayName = "Header";

export { Header };
