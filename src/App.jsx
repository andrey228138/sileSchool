import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import StrOne from "./pages/1str";
import StrTwo from "./pages/2str";
import StrThree from "./pages/3str";
const objectLinks = [
  {
    path: "/",
    jsxElement: <StrOne/>,
  },
  {
    path: "normal",
    jsxElement: <StrTwo/>,
  },
  {
    path: "hard",
    jsxElement: <StrThree/>,
  },
];
function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Layout/>}>
  {objectLinks.map((objectLink) => (
          <Route
         
            path={objectLink.path}
            element={objectLink.jsxElement}
          />
        ))}</Route>
</Routes>
    </>
  );
}

export default App;
