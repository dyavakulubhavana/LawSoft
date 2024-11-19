import * as React from 'react';



import Grid from '@mui/material/Grid2';


export default function InfoGrid() {
    return (
        <>
            <Grid container spacing={1} columnSpacing={4}>
                <Grid size="grow" className="bg-red-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-blue-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-yellow-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-gray-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
            </Grid>
            <Grid container spacing={1} columnSpacing={4}>
                <Grid size="grow" className="bg-purple-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-green-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-sky-600 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-orange-400 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-3xl font-bold'>39</h1>
                </Grid>
            </Grid>
        </>
    );
}
