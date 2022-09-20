import { Grid } from "@mui/material";
import EachTarget from "./each_target";

export default function ListTargets(props) {
    return <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
    >
        {
            props.targets.map((target) => {
                return <EachTarget target={target} key={target.id} />
            })
        }
    </Grid>
}