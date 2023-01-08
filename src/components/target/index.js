import { Box, Divider, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import NonSuccess from "../others/non_success"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useSearchParams } from "react-router-dom"
import Details from "./details"
import LatencyChart from "./latency_chart"

const defaultState = {
    loading: false,
    error: ""
}

export default function Target() {
    const [state, setState] = useState(defaultState)
    const [target, setTarget] = useState({})
    const [pings, setPings] = useState([])
    const [zoomLevel, setZoomLevel] = useState('1m')
    const user = useSelector(state => state.user)
    const url = useSelector(state => state.url)
    let [searchParams] = useSearchParams()

    const renderTarget = () => {
        if (state.loading || state.error !== "") {
            return <NonSuccess state={state} />
        }
        return <>
            <Details
                target={target}
                fetchTarget={fetchTarget}
                zoomLevel={zoomLevel}
                changeZoomLevel={changeZoomLevel}
            />
            <Divider
                sx={{
                    mt: 2, mb: 2
                }}
            />
            <Grid container>
                <Grid item xs={12} lg={6}>
                    <LatencyChart pings={pings} zoomLevel={zoomLevel} />
                </Grid>
            </Grid>
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

    const fetchPings = (name, zoomLevel) => {
        setState({
            ...defaultState,
            loading: true,
        })
        axios.get(url + '/target/pings?name=' + name, {
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
                setPings(response.data.response)
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
        const name = searchParams.get("name")
        if (name === null || name === undefined) {
            setState({
                ...defaultState,
                loading: false,
                error: "name not set"
            })
            return
        }
        fetchTarget(name)
        fetchPings(name)
    }, [])

    useEffect(() => {
        const name = searchParams.get("name")
        fetchPings(name, zoomLevel)
    }, [zoomLevel])

    const changeZoomLevel = (event) => {
        setZoomLevel(event.target.value);
    };


    return <Box
        sx={{ pt: 1, pb: 1 }}
    >
        {renderTarget()}
    </Box>
}