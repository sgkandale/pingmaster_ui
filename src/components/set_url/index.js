import { useState } from "react"
import { Box, TextField, Grid, Button, Typography } from "@mui/material";

export default function SetUrl(props) {
    const [url, setUrl] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.setUrl(url)
    }

    return <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ height: '100vh' }}
    >
        <Typography
            variant="h3"
            sx={{
                fontFamily: 'Silkscreen, Helvetica, sans-serif',
                padding: '50px 0',
                color: 'primary.main',
                textTransform: 'lowercase'
            }}>
            pingmaster
        </Typography>
        <Box
            sx={{
                border: '1px solid',
                borderColor: 'text.disabled',
                borderRadius: '5px',
                minWidth: '400px',
                maxWidth: '600px',
                width: '100%',
                padding: '30px'
            }}
        >
            <Typography
                variant="h5"
                align="center"
                sx={{
                    marginBottom: '10px'
                }}
            >
                Set Pingmaster URL
            </Typography>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ padding: '20px' }}
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleFormSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Set URL"
                    placeholder="Exclude trailing slash (/)"
                    variant="outlined"
                    color="text"
                    fullWidth
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    sx={{
                        marginBottom: '20px',
                    }}
                />
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginTop: '20px'
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={handleFormSubmit}
                    >
                        Set
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </Grid>
}