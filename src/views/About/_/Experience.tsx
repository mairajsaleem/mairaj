import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';

type ComponentProps = {
  date:string;
  title: string;
  subtitle:string;
  description: string;
}

export const Experience = (props:ComponentProps) => {
  const{date,title,subtitle,description}=props;

  return (
    <>

      <Timeline>
        <TimelineItem >
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              <TimelineContent
                variant="body2"
                color="text.secondary"
              >
                {date}
              </TimelineContent>
            </Typography>
            <Typography variant="h5" sx={{ mb: '5px' }}>{title} <Typography component='span' variant="body1" > {subtitle}</Typography></Typography>
            <Typography variant="body2">{description}</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

    </>
  )
}
