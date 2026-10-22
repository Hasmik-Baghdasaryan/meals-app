import { Outlet } from "react-router-dom";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
