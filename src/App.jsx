import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Thermostat, Cloud, Air, WbSunny } from '@mui/icons-material';
import Footer from './Components/Footer';
import CardInfo from './Components/CardInfo';

const theme = createTheme();

export default function Album() {
  const [city, setCity] = useState("Quito")
  const [temperature, setTemperature] = useState({})
  const [wind, setWind] = useState({ main: 'Wind ', description: '' })
  const [weather, setWeather] = useState({ main: '', description: '' })
  const [weatherIco, setIcon] = useState('Rain')

  const getData = async () => {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62c127717633e854182f97784b9b4c49&units=metric`
    let response = await fetch(api)
    let data = await response.json()
    setTemperature({ main: 'Temperature °C', description: data.main.temp })
    setWind({ main: 'Wind ', description: data.wind.speed + " m/s" })
    setWeather({ main: 'Weather', description: data.weather[0].description })
    setIcon(data.weather[0].main)
    console.log(data)
  }

  function IconThermostat() {

    // Select a color according to the temperature
    const status = parseInt(temperature.description)
    let color='#fffe16'
    if(status<18)color='#35b9ff'
    if(status>18 && status<26)color='#fffe16'
    if(status>26)color='#ff3636'

    return (
      <Thermostat sx={{ width: '60px', fontSize: '50px', color: color }} />
    )
  }
  
  function IconAir() {
    return (
      <Air sx={{ width: '60px', fontSize: '50px' }} color="disabled" />
    )
  }

  function IconWeather() {


    const weather = weatherIco

    // Select an icon according to the weather condition

    if (weather === "Rain") {
      return (
        <img src="https://img.icons8.com/ultraviolet/40/000000/downpour.png" />
      )
    }
    if (weather === "Sun" || weather === 'Clear') {
      return (
        <WbSunny sx={{ width: '60px', fontSize: '50px', color: 'yellow' }} />
      )
    }
    if (weather === "Clouds") {
      return (
        <Cloud sx={{ width: '60px', fontSize: '50px' }} color="primary" />
      )
    }
  }

  useEffect(() => {
    getData()
  }, [city])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src="/public/favicon.png" style={{ width: '30px' }} />
          <Typography variant="h6" color="inherit" noWrap>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 1
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              p={1}
            >
              Welcome
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is a real-time weather application.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={1}
              justifyContent="center"
            >
              <Typography variant="p" align="center" color="text.secondary" paragraph>
                Enter the name of a city
              </Typography>
              <TextField id="outlined-basic" label="City" variant="outlined"
                onChange={(evt) => { setCity(evt.target.value) }} />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          <Grid container spacing={4}>
            <CardInfo info={weather} Icon={IconWeather} />
            <CardInfo info={temperature} Icon={IconThermostat} />
            <CardInfo info={wind} Icon={IconAir} />
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
