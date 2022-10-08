import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { color, margin } from '@mui/system';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', height: 'auto', alignItems: 'center'}} component="footer">
            <Divider />
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                pt={3}
            >
                Weather app powered by React & OpenWeather
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                Luis Zurita
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}

export default Footer
