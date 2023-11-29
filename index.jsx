import ReactDOM from "react-dom/client";
import appRouter from "./src/App";
import { RouterProvider } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
