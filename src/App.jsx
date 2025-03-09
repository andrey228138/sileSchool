import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import StrOne from "./pages/1str";
import StrTwo from "./pages/2str";
import StrThree from "./pages/3str";

const objectLinks = [
  {
    path: "/",
    jsxElement: <StrOne />,
  },
  {
    path: "normal",
    jsxElement: <StrTwo />,
  },
  {
    path: "hard",
    jsxElement: <StrThree />,
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {objectLinks.map((objectLink, index) => (
          <Route
            key={index} // Добавьте уникальный ключ
            path={objectLink.path}
            element={objectLink.jsxElement}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;