import * as React from 'react';
import Grid from '@mui/material/Grid2';
import ImgCard from './ImgCard';


export default function ImgGrid() {
    return (

        <>
            <Grid container spacing={1} columnSpacing={4}>
                <Grid size="grow" className="ml-10">
                    <ImgCard />
                </Grid>
                <Grid size="grow" className="">
                    <ImgCard />
                </Grid>
                <Grid size="grow" className="">
                    <ImgCard />
                </Grid>
            </Grid>
            <Grid container spacing={1} columnSpacing={4}>
                <Grid size="grow" className="ml-10">
                    <ImgCard />
                </Grid>
                <Grid size="grow" className="">
                    <ImgCard />
                </Grid>
                <Grid size="grow" className="">
                    <ImgCard />
                </Grid>
            </Grid>
        </>
    );
}
