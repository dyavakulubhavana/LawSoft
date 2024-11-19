import * as React from 'react';



import Grid from '@mui/material/Grid2';


export default function InfoGrid() {
    return (
        <>
            <Grid container spacing={1} columnSpacing={4}>
                <Grid size="grow" className="bg-red-500 p-6">
                    <p>High Court Complexes</p>
                    <h1 className='text-4xl font-bold'>39</h1>
                </Grid>
                <Grid size="grow" className="bg-blue-400 p-6">
                    <p>HC Pending Cases</p>
                    <h1 className='text-4xl font-bold'>6.1 M</h1>
                </Grid>
                <Grid size="grow" className="bg-yellow-400 p-6">
                    <p>HC Disposed Cases</p>
                    <h1 className='text-4xl font-bold'>38.27 M</h1>
                </Grid>
                <Grid size="grow" className="bg-gray-400 p-6">
                    <p>HC Cases Listed Today</p>
                    <h1 className='text-4xl font-bold'>48.25 K</h1>
                </Grid>
            </Grid>
            <Grid container spacing={1} columnSpacing={4}>
                <Grid size="grow" className="bg-purple-400 p-6">
                    <p>District & Taluka Court Complexes</p>
                    <h1 className='text-4xl font-bold'>3577</h1>
                </Grid>
                <Grid size="grow" className="bg-green-400 p-6">
                    <p>DC Pending Cases</p>
                    <h1 className='text-4xl font-bold'>45.3 M</h1>
                </Grid>
                <Grid size="grow" className="bg-sky-600 p-6">
                    <p>DC Disposed Cases in Last Month</p>
                    <h1 className='text-4xl font-bold'>1.2 M</h1>
                </Grid>
                <Grid size="grow" className="bg-orange-400 p-6">
                    <p>DC Cases Listed Today</p>
                    <h1 className='text-4xl font-bold'>595.89 K</h1>
                </Grid>
            </Grid>
        </>
    );
}
