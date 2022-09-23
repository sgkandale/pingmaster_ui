import { Box, Divider } from "@mui/material"
import { useEffect, useState } from "react"
import NonSuccess from "../others/non_success"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useSearchParams } from "react-router-dom"
import Details from "./details"

const defaultState = {
    loading: false,
    error: ""
}

export default function Target() {
    const [state, setState] = useState(defaultState)
    const [target, setTarget] = useState({})
    const user = useSelector(state => state.user)
    const url = useSelector(state => state.url)
    let [searchParams] = useSearchParams()

    const renderTarget = () => {
        if (state.loading || state.error !== "") {
            return <NonSuccess state={state} />
        }
        return <>
            <Details target={target} fetchTarget={fetchTarget} />
            <Divider
                sx={{
                    mt: 2, mb: 2
                }}
            />
        </>
    }

    const fetchTarget = (name) => {
        setState({
            ...defaultState,
            loading: true,
        })
        axios.get(url + '/target/?name=' + name, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token
            }
        })
            .then(response => {
                setState({
                    ...defaultState,
                    loading: false,
                    error: ""
                })
                setTarget(response.data.response)
            })
            .catch(error => {
                setState({
                    ...defaultState,
                    loading: false,
                    error: error.response.data.message
                })
            });
    }

    useEffect(() => {
        const name = searchParams.get("name")
        if (name === null || name === undefined) {
            setState({
                ...defaultState,
                loading: false,
                error: "name not set"
            })
        }
        fetchTarget(name)
    }, [])


    return <Box
        sx={{ pt: 1, pb: 1 }}
    >
        {renderTarget()}
    </Box>
}