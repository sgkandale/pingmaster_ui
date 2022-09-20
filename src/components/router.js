import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./auth";
import Overview from "./overview";
import Menu from "./menu";
import NotFound from "./not_found";
import Targets from "./targets";
import AddTarget from "./add_target";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_REMOVE_URL, ACTION_SET_URL } from "./state_actions";
import SetUrl from './set_url';
import { useEffect } from "react";

export default function Router() {
    const url = useSelector(state => state.url)
    const dispatch = useDispatch()

    useEffect(() => {
        let urlFromStorage = localStorage.getItem("url");
        if (urlFromStorage === null || urlFromStorage === undefined) {
            dispatch({ type: ACTION_REMOVE_URL })
        } else {
            dispatch({ type: ACTION_SET_URL, payload: urlFromStorage })
        }
    })

    const setUrl = (u) => {
        localStorage.setItem("url", u)
        dispatch({ type: ACTION_SET_URL, payload: u })
    }

    const render = () => {
        if (url === null || url === undefined) {
            return <></>
        } else if (url === "") {
            return <SetUrl setUrl={setUrl} />
        } else {
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
    }

    return render()
}