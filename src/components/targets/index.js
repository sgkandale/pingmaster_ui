import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import NonSuccess from "./non_success"
import ButtonBar from "./button_bar"
import { useDispatch, useSelector } from 'react-redux'
import ListTargets from "./list_targets"
import axios from 'axios'
import { ACTION_ADD_TARGETS } from "../state_actions"

const defaultState = {
    loading: false,
    error: ""
}

export default function Targets() {
    const [state, setState] = useState(defaultState)
    const targets = useSelector(state => state.targets)
    const url = useSelector(state => state.url)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const renderTargets = () => {
        if (state.loading || state.error !== "") {
            return <NonSuccess state={state} />
        }
        return <ListTargets targets={targets} />
    }

    const fetchTargets = () => {
        setState({
            ...defaultState,
            loading: true,
        })
        axios.get(url + '/target/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token
            }
        })
            .then(response => {
                console.log(response)
                setState({
                    ...defaultState,
                    loading: false,
                    error: ""
                })
                dispatch({ type: ACTION_ADD_TARGETS, payload: response.data.response })
            })
            .catch(error => {
                console.log(error)
                setState({
                    ...defaultState,
                    loading: false,
                    error: error.response.data.message
                })
            });
    }

    useEffect(() => {
        if (targets === null || targets === undefined || targets.length === 0) {
            fetchTargets()
        }
        // need to be run only once
    }, [])

    return <>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <ButtonBar
                fetchTargets={fetchTargets}
            />
            {renderTargets()}
        </Grid>
    </>
}