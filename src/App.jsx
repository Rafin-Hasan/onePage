import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
