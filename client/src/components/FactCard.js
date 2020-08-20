import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth:345,
    
  marginLeft:"65px",
  
  
    
  },
  media: {
    height: 400,
  },
});

export default function FactCard(props) {
  const classes = useStyles();

  return ( 
  <Grid item xs={12} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  style={{color:"black"}}gutterBottom variant="h5" component="h2">
            {props.className}
            {props.name}
          </Typography> 
          <Typography style={{color:"black"}} gutterBottom variant="p" component="p">
            {props.lifespan}
            
          </Typography> 
          <Typography gutterBottom variant="p" component="p">
            "{props.quote}"
            
          </Typography> 
          <Typography variant="body2" color="textSecondary" component="p">
            {props.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      {/* </CardActions> */} 
    </Card>

        
       
        
    </Grid>
    
  );
}

