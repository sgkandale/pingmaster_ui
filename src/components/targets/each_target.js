import { Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'

export default function EachTarget(props) {
    const navigate = useNavigate()

    return <Card
        sx={{
            width: '100%',
            maxWidth: 350,
            border: '1px solid',
            borderColor: 'text.disabled',
            cursor: 'pointer'
        }}
        elevation={0}
        onClick={() => navigate('/target?id=' + props.target.name)}
    >
        <CardContent>
            <Typography variant="h4">
                {props.target.name}
            </Typography>
            <Typography variant="h6" color="textSecondary">
                {props.target.target_type}
            </Typography>
            <Typography variant="body1" >
                {props.target.protocol}://{props.target.host_address}
            </Typography>
        </CardContent>
    </Card>
}