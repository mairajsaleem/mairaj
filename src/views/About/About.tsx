import { StepConnector, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CircularProgress from '@mui/material/CircularProgress';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';


//Import Component
import { Skill } from "./_/Skill";
import { Work } from "./_/Work";
import { Infos } from "./_/Infos";
import { Experience } from "./_/Experience";
import { Info } from "@mui/icons-material";





export const About = () => {
  return (
    <>
      <Grid container>
        
        {/* //////////////////// {"MainTitle"} ////////////////////// */}
        
        <Grid item xs={12} md={12} lg={12}
          sx={{ position: 'relative' }}
        >
          <Typography variant="h1"
            sx={{ textTransform: 'uppercase', color: "hsla(0,0%,100%,.07)" }}
            align="center" >Resume</Typography>
          <Typography variant="subtitle1" align="center" sx={{ position: 'relative', top: "-50%" }}>ABOUT<Typography variant="subtitle1" component="span" color="primary"> ME</Typography></Typography>
        </Grid>
        
        {/* //////////////////// {"personal"} ////////////////////// */}
        
        <Box sx={{ mb: "3rem", ml: "4rem", mt: "3rem" }}>
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Grid container spacing={12} >
        
                {/* //////////////////// {"Personal info"} ////////////////////// */}
        
                <Grid item xs={12} md={6} lg={6}>
                  <Typography variant="h4">PERSONAL INFOS</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} >
                <Grid item xs={12} md={6} lg={6}>
                  <Typography variant="body2">
                    <Infos title={"Name"} description={"DEVELOPER"} />
                    <Infos title={"Age"} description={"27 Years"} />
                    <Infos title={"Freelance"} description={"Available"} />
                    <Infos title={"Phone"} description={"+21621184010"} />
                    <Infos title={"Skype"} description={"steve.milner"} />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}
                >
                  <Typography variant="body2">
                    <Infos title={"Last Name"} description={"Milner"} />
                    <Infos title={"Nationality"} description={"Tunisian"} />
                    <Infos title={"Address"} description={"Tunis"} />
                    <Infos title={"Email"} description={"you@mail.com"} />
                    <Infos title={"Langages"} description={"French, English"} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={12} >
                <Grid item xs={12} md={6} lg={6}>
                  <Button variant="outlined"
                    sx={{ postion: 'relative', py: '15px', borderRadius: '2rem', mt: '30px', width: '80%' }}>
                    DOWNLOAD CV
                    <DownloadForOfflineIcon fontSize="large" />
                  </Button>

                </Grid>
              </Grid>
            </Grid>
            {/* //////////////////// {"Work "} ////////////////////// */}
            <Grid item xs={12} md={6} lg={6}>
              <Grid container >
                <Work body={"Years of Experience"} progress={12} />
                <Work body={"Years of Experience"} progress={12} />
                <Work body={"Years of Experience"} progress={12} />
                <Work body={"Years of Experience"} progress={12} />

              </Grid>

            </Grid>
          </Grid>
        </Box>
      </Grid>
      <StepConnector sx={{ m: "5px auto", orientation: "horizontal", width: '40%' }} />

      {/* //////////////////// {"Skills"} ////////////////////// */}

      <Typography variant="h4" sx={{ mt: '2rem', textTransform: 'uppercase', }}
        align="center" >my skills</Typography>
      <Grid container spacing={2} sx={{ width: '75%', m: 'auto' }}>
        <Skill body="About" progress={75} />
        <Skill body="Home" progress={50} />
        <Skill body="React" progress={95} />
        <Skill body="Tsx" progress={15} />
        <Skill body="About" progress={75} />
        <Skill body="Home" progress={50} />
        <Skill body="React" progress={95} />
        <Skill body="Tsx" progress={15} />
      </Grid>
      <StepConnector sx={{ m: "2% auto", orientation: "horizontal", width: '40%' }} />

      {/* //////////////////// {"Experience"} ////////////////////// */}

      <Typography variant="h4" sx={{ mt: '2rem', mb: "2rem", textTransform: 'uppercase', }}
        align="center" >experience & education</Typography>
      <Grid container spacing={2} sx={{ m: 'auto', width: "80%" }}>
        <Grid item xs={12} md={6} lg={6} >
          <Experience date={'2018 - PRESENT'} title={'WEB DEVELOPER -'} subtitle={'ENVATO'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit 2013 - 2018'} />
          <Experience date={'2018 - PRESENT'} title={'WEB DEVELOPER -'} subtitle={'ENVATO'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit 2013 - 2018'} />

        </Grid>
        <Grid item xs={12} md={6} lg={6} >
          <Experience date={'2018 - PRESENT'} title={'WEB DEVELOPER -'} subtitle={'ENVATO'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit 2013 - 2018'} />
          <Experience date={'2018 - PRESENT'} title={'WEB DEVELOPER -'} subtitle={'ENVATO'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit 2013 - 2018'} />
        </Grid>
      </Grid>
    </>
  );
};
