import React from 'react';
import { Box,Grid,Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
type ComponentProps = {
  body: string;
  progress: number;
}
export const Skill = (props:ComponentProps) => {
  
  const {progress,body} = props;
    return (
        <>
        <Grid item xs={6} md={3} lg={3}>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress variant="determinate" value={progress} thickness={5} size="7rem" />
          <Typography variant="h4" position='absolute'>{progress}%</Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }} align="center">{body}</Typography>
      </Grid>
      </>
  )
}
