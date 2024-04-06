import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
