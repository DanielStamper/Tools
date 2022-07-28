import React, { memo, Fragment } from "react";
import { Header, Footer, WeatherWidget } from "../../components";
// import { colors } from "../../colors";

const HomePage = memo((props) => {
  return (
    <>
      <Header></Header>
      <WeatherWidget></WeatherWidget>
      <Footer></Footer>
    </>
  );
});

HomePage.displayName = "HomePage";

export { HomePage };

// <MainLayout>
//   <Section
//     eyebrow={{
//       textContent: "Welcome",
//       textSize: "1em",
//       textColor: colors.white,
//     }}
//     header="Simple Transit App"
//     links={[
//       { icon: <AcUnit />, text: "Test 1", url: "test" },
//       {
//         icon: <Star />,
//         text: "Test 2",
//         url: "test2",
//       },
//       {
//         icon: <Map />,
//         text: "Transit Maps",
//         url: "map",
//       },
//     ]}
//   />
//   ;
// </MainLayout>
