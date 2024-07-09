import React from "react";
import { Grid, Typography } from "@mui/material";
import './style.css'

const MoveIcon = () => {
    return (
        <Grid container spacing={2} className="card">
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid container alignItems="center" className="icon-container-move">
                    <Grid item>
                        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182675/img-1_sxxysq.svg"} alt="House Icon" className="icon" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" className="label">2 Stories</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid container alignItems="center"  className="icon-container-move">
                    <Grid item>
                        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182677/img-2_azwsrk.svg"} alt="Bed Icon" className="icon" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" className="label" >4 Beds</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid container alignItems="center"  className="icon-container-move">
                    <Grid item>
                        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182682/img-3_jqfjkb.svg"} alt="Bath Icon" className="icon" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" className="label">4 Baths</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid container alignItems="center"  className="icon-container-move">
                    <Grid item>
                        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182683/img-4_v45zut.svg"} alt="Garage Icon" className="icon" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" className="label">2 Garages</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid container alignItems="center"  className="icon-container-move">
                    <Grid item>
                        <img src={"https://res.cloudinary.com/dtivafy25/image/upload/v1720182747/img-5_hcvxhj.svg"} alt="Size Icon" className="icon" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" className="label">3335 Sq. Ft</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MoveIcon;
