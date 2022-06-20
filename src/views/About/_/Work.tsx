import { Grid,Typography,StepConnector } from '@mui/material';
type ComponentProps = {
    body: string;
    progress: number;
  }
export const Work = (props:ComponentProps) => {
    const {progress,body} = props;
    return (
        <>
            <Grid item xs={5} spacing={2} sx={{ border: '1px solid #252525', borderRadius: '5px', m: '10px', p: '20px' }}>
                <Typography variant="h2" component="span" color={'primary'} sx={{ position: 'relative' }}> {progress}  <Typography variant="h3" color={'primary'} component="span" sx={{
                    position: 'absolute',
                    top: '-5px',
                    left: '58px'
                }}>+</Typography></Typography>

                <Typography sx={{ mt: "1rem", display: 'flex',width:'80%' }} variant='body1'>
                    <StepConnector sx={{ m: "9px", orientation: "horizontal", width: '70px' }} />{body}
                </Typography >
            </Grid>
        </>
    )
}
