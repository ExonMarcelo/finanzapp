import React from "react";
import {Link} from "react-router-dom";
//import "./Main.css";

//imports from material-ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

import HowToVoteIcon from '@material-ui/icons/HowToVote';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    ///padding: theme.spacing(2), 
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "300px"
  },
  rootGridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: "2rem", marginBottom: "3rem", height: "100%"}}>
      
      <Grid container justify="center"
          alignItems="center" spacing={2}>
        
          <Grid item>

            <Paper>
              <Link to="/emitir-voto" style={{textDecoration: "none"}}>
                <Card className={classes.card} style={{/*backgroundColor: "#e7eef4"*/}} onClick={() => alert("mostrar dialog")}>
                    <CardContent>
                      {/*<HowToVoteIcon color="primary"/>*/}
                      <Typography variant="body2" color="primary">Disponible para este mes</Typography>
                      <Typography variant="h4" color="primary">1000 USD</Typography>
                      <div style={{display:"inline-flex", width:"200px", justifyContent:"space-between"}}>
                        <p>Ingresos</p>
                        <p>Egresos</p>
                      </div>
                    </CardContent>
                </Card>
              </Link>
            </Paper>
          </Grid>
        
      </Grid>
    
    </div>
  );
}
