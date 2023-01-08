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



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Latency',
            data: labels.map(() => '100'),
            borderColor: '#5B5BFF',
            backgroundColor: '#AAAAFF',
        }
    ],
};

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
    let newVal = {}
    const newTest = () => {
        newVal = labels.map(() => '100')
    }
    newTest()
    console.log(newVal)

    return <Box >
        <Line options={options} data={data} />
    </Box>
}