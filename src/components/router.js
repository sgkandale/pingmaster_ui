import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./auth";
import Overview from "./overview";
import Menu from "./menu";
import NotFound from "./not_found";
import Targets from "./targets";
import AddTarget from "./add_target";
import { useDispatch } from "react-redux";
import { ACTION_SET_URL } from "./state_actions";

export default function Router() {

    let url = localStorage.getItem("url")
    const dispatch = useDispatch()
    dispatch({ type: ACTION_SET_URL, payload: url })

    return <BrowserRouter>
        <Routes>
            <Route
                path="/login"
                element={<Auth />}
            />
            <Route
                path="/"
                element={
                    <Menu viewElement={<Overview />} />
                }
            />
            <Route
                path="/targets"
                element={
                    <Menu viewElement={<Targets />} />
                }
            />
            <Route
                path="/targets/new"
                element={
                    <Menu viewElement={<AddTarget />} />
                }
            />
            <Route exact path="*" element={<NotFound />}>
            </Route>
        </Routes>
    </BrowserRouter>
}