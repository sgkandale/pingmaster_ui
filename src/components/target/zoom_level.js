import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

export default function ZoomLevel(props) {
    return <FormControl fullWidth>
        <InputLabel id="zoom-level-label">Zoom Level</InputLabel>
        <Select
            labelId="zoom-level-label"
            id="zoom-level"
            value={props.zoomLevel}
            label="Zoom Level"
            onChange={props.changeZoomLevel}
            disabled
        >
            <MenuItem value={'1m'}>Minute</MenuItem>
            <MenuItem value={'2m'}>2 Minutes</MenuItem>
            <MenuItem value={'5m'}>5 Minutes</MenuItem>
        </Select>
    </FormControl>
}