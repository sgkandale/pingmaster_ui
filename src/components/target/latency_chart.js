import { Box } from "@mui/material"
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Latency in ms',
        },
    },
}

export default function LatencyChart(props) {


    var labels = []
    let labelData = []
    let i = 0
    for (i = 0; i < props.pings.length; i++) {
        labels.push(props.pings[i].timestamp)
        labelData.push(props.pings[i].duration)
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Latency',
                data: labelData,
                borderColor: '#5B5BFF',
                backgroundColor: '#AAAAFF',
            }
        ],
    };

    return <Box >
        <Line
            options={options}
            data={data}
        />
    </Box>
}