import { Edit, Refresh } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

export default function Details(props) {
    const { target } = props

    return <Box>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Box>
                <Typography variant="h4">
                    {target.name}
                </Typography>
            </Box>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                sx={{ width: '200px' }}
            >
                <IconButton disabled>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => props.fetchTarget(target.name)}>
                    <Refresh />
                </IconButton>
            </Grid>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
        >
            <Box>
                <Typography variant="h6" color="textSecondary">
                    {target.target_type}
                    <br />
                    {target.protocol}://{target.host_address}{target.port > 0 ? `:${target.port}` : ""}
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                    Ping Interval : {target.ping_interval}
                    <br />
                    Ping Timeout : {target.ping_timeout}
                </Typography>
            </Box>
            <Box sx={{ width: '100px' }}>
            </Box>
        </Grid>
    </Box>
}
