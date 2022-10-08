import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function CardInfo(props) {
    const data = props.info
    const Icon = props.Icon
    const [info, setInfo] = useState({})

    useEffect(() => {
        setInfo(data)
        console.log(info)
    }, [data])
   
    
    //const icon = "http://openweathermap.org/img/wn/"+info.icon+"@2x.png"
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' , padding: '5px', background: '#f1f1f1'}}
            >
                <Icon />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="h5">
                        {info.main}
                    </Typography>
                    <Typography>
                        {info.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardInfo