import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWork from "./components/AddWork/AddWork";
import Works from "./components/Works/Works";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nomatch from "./components/NoMatch/Nomatch";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />}>
          <Route path="add" element={<AddWork />} />
          <Route path="update/:id" element={<AddWork />} />
        </Route>
        <Route path="*" element={<Nomatch />} />

        {/* <Route path=":addWork" element={<AddWork />} /> */}
      </Routes>
    </>
  );
}

export default App;
