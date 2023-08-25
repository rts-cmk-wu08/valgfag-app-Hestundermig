import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Home from "./pages/Home";
import MyMap from "./pages/MyMap";

export const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="/map" element={<MyMap />} />

            </Route>
        )
)