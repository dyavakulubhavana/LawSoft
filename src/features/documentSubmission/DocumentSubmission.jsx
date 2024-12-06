import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const casesDetails = [
  {
    number: 10,
  },
  {
    number: 12165,
  },
  {
    number: 46464,
  }
]
const docTypes = [
  {
    name: "File"
  },
  {
    name: "Evedence"
  },
  {
    name: "Identity"
  }
]

export function DocumentSubmission() {

  return (
    <>
      <form className="w-3/5 h-full m-auto border-2 shadow-2xl p-6 rounded-xl">
        <div className="font-bold text-2xl">Submit Documents: </div>
        <div className="flex justify-around gap-5 m-10">
          <div className="text-left">
            <h1>Select Case No</h1>
            <TextField
              id="outlined-select-states"
              select
              defaultValue="No"
              helperText="Please select case number"
            >
              {casesDetails.map((cases) => (
                <MenuItem key={cases.number} value={cases.number}>
                  {cases.number}
                </MenuItem>
              ))}
            </TextField>
          </div >

          <div className="text-left">
            <h1>Select Document Type</h1>
            <TextField
              id="outlined-select-states"
              select
              defaultValue="No"
              helperText="Please select Document Type"
            >
              {docTypes.map((type) => (
                <MenuItem key={type.name} value={type.name}>
                  {type.name}
                </MenuItem>
              ))}
            </TextField>
          </div >
        </div>


        <Button
          component="label"
          variant="outlined"
          name="uploadPetition"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            accept="application/pdf"
            onChange={(event) => console.log(event.target.files)}
          />
        </Button>

        <div className="mt-10">
        <Button className="W-full" variant="contained">Submit</Button>
        </div>
      </form>

    </>
  );
}
