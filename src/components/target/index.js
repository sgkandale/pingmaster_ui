import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import NonSuccess from "../others/non_success"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useSearchParams } from "react-router-dom"

const defaultState = {
    loading: false,
    error: ""
}

export default function Target() {
    const [state, setState] = useState(defaultState)
    const user = useSelector(state => state.user)
    const url = useSelector(state => state.url)
    const [searchParams] = useSearchParams()
    console.log(searchParams.entries())

    const renderTargets = () => {
        if (state.loading || state.error !== "") {
            return <NonSuccess state={state} />
        }
        return <></>
    }

    const fetchTarget = () => {
        setState({
            ...defaultState,
            loading: true,
        })
        axios.get(url + '/target/?name=', {
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
        fetchTarget()
    }, [])


    return <Box
        sx={{ pt: 5 }}
    >
        Hello
        {renderTargets()}
    </Box>
}