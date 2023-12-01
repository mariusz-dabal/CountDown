import Countdown from 'react-countdown';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Root() {
    return (
      <Container id="countdown">
        <Grid 
          container 
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
          >
          <Typography variant='h1' component="h1" align='center'>
            {/* <Countdown date={new Date("2023-11-09T18:00:00")} /> */}
            Maciej to gej.
          </Typography>
        </Grid>
      </Container>
    );
  }