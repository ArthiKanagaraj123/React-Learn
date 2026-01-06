import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Router1 from "./Router1";
import Router2 from "./Router2";
import Router3 from "./Router3";
import Router4 from "./Router4";
import Router5 from "./Router5";
import Router6 from "./Router6";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Router1</Link>
          <Link to="/router2">Router2</Link>
          <Link to="/router3">Router3</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Router1 />} />
          <Route path="/router2" element={<Router2 />} />
          <Route path="/router3" element={<Router3 />}>
            <Route path="router4" element={<Router4 />} />
            <Route path="router5" element={<Router5 />} />
          </Route>
          <Route index element={<Router6/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
