import React from 'react'
import { Grid, Typography } from '@mui/material';

type ComponentProps = {
  title: string;
  description: string;
}


export const Infos = (props: ComponentProps) => {
  const { title, description } = props;



  return (
    <>
      <Typography sx={{ mt: "1.5rem" }} >
        {title}:  {description}
      </Typography >

    </>
  )
}
