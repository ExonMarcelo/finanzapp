import React, {useEffect} from "react";
import { connect } from "react-redux";
import { changeBalance, changeAmountIncome, changeAmountExpenses } from "../../../redux/actions/global";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import "./Main.css";

//imports from material-ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Paper, Tabs, Tab, Box, List, Divider} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//icons
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

//import templates components
import ListItemWithAvatarAndButton from "../../Templates/ListItemWithAvatarAndButton/ListItemWithAvatarAndButton";

//import temporary data
import dataTempMain  from "../../../helpers/dataMain";

//import functions globals
import {formatNumber}  from "../../../helpers/globalFunctions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  /*card: {
    ///padding: theme.spacing(2), 
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "350px"
  },*/
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const generateIconAvatarIncome = (category) => {
  let icon;
  switch (category) {
    case 1:
      icon = <WorkIcon/>;
      break;
  
    default:
      icon = <MonetizationOnIcon/>;
      break;
  }
  return icon;
};

const generateIconAvatarExpenses = (category) => {
  let icon;
  switch (category) {
    //hogar(1), servicios(2), despensa(3), otros(4),
    case 1:
      icon = <HomeIcon/>;
      break;
    case 2:
      icon = <ListAltIcon/>;
      break;
    case 3:
      icon = <ShoppingBasketIcon/>;
      break;
  
    default:
      icon = <MonetizationOnIcon/>;
      break;
  }
  return icon;
};


function Main(props) {
  const {amountBalance, amountIncome, amountExpenses} = props;
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const changeAmountBalance = (newAmount) => {
    const { dispatch } = props;
  
    dispatch(changeAmountBalance(newAmount));
  };

  /*useEffect(() => {
    setTimeout(() => {
      changeAmountBalance(21);
    }, 250);
  }, []);*/

  return (
    <div className={classes.root} style={{ padding: "2rem", height: "100%"}}>
      
      <Grid container justify="center"
          alignItems="center" spacing={2} style={{marginTop:"3rem"}}>
        
          <Grid item>

            <Paper style={{borderRadius:"10px"}}>
              
                <Card className="cards" style={{borderRadius:"10px"}}>
                    <CardContent>
                      {/*<HowToVoteIcon color="primary"/>*/}
                      <div style={{display:"inline-flex"}}>
                        <TrendingUpIcon color="primary"/>
                        <Typography variant="h6"  color="primary"><b>Balance</b></Typography>
                      </div>
                      
                      <Typography variant="h4" color="primary"><b>{amountBalance} USD</b></Typography>

                      <div style={{display:"inline-flex", marginTop:"10px", width:"250px", justifyContent:"space-between"}}>
                        <div className="div-ingresos">
                          <Typography color="primary"><b>{amountIncome} USD</b></Typography>
                          <div style={{display:"inline-flex"}}>
                            <AddCircleOutlineIcon color="primary" style={{paddingRight:"5px"}}/>
                            <Typography color="primary"><b>Ingresos</b></Typography>
                          </div>
                        </div>
                        
                        <div className="div-egresos">
                          <Typography color="error"><b>{amountExpenses} USD</b></Typography>
                          <div style={{display:"inline-flex"}}>
                            <RemoveCircleOutlineIcon color="error" style={{paddingRight:"5px"}}/>
                            <Typography color="error"><b>Gastos</b></Typography>
                          </div>
                        </div>
                        
                        
                      </div>
                    </CardContent>
                </Card>
            </Paper>
          </Grid>
        
      </Grid>

      <Grid container justify="center"
          alignItems="center" spacing={2} style={{marginTop:"2rem"}}>
        
          <Grid item>

            <Paper style={{borderRadius:"10px"}}>
              
                <Card className="cards" style={{borderRadius:"10px"}}>
                    <CardContent>
                    <Typography variant="h6" color="primary" dir="right"><b>Movimientos</b></Typography>

                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                    >
                      <Tab label="Ingresos" {...a11yProps(0)} />
                      <Tab label="Gastos" {...a11yProps(1)} /> 
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      <List>
                        {dataTempMain.income.map(item => (
                          <React.Fragment key={item.id}>
                            <ListItemWithAvatarAndButton
                              iconAvatar={generateIconAvatarIncome(item.category)}
                              textPrimary={`${item.description}`}
                              textSecondary={`${item.amount} USD - ${item.date}`}
                              iconAction={<DeleteIcon />}
                              callback={() => alert("item press")}
                            />
                            <Divider />
                          </React.Fragment>
                        ))}
                      </List>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <List>
                        {dataTempMain.expenses.map(item => (
                          <React.Fragment key={item.id}>
                            <ListItemWithAvatarAndButton
                              iconAvatar={generateIconAvatarExpenses(item.category)}
                              textPrimary={`${item.description}`}
                              textSecondary={`${item.amount} USD - ${item.date}`}
                              iconAction={<DeleteIcon />}
                              callback={() => alert("item press")}
                            />
                            <Divider />
                          </React.Fragment>
                        ))}
                      </List>
                    </TabPanel>
                    </CardContent>
                </Card>
            </Paper>
          </Grid>
        
      </Grid>

      
    
    </div>
  );
}

export default connect((state) => ({
  amountBalance: state.global.amountBalance,
  amountIncome: state.global.amountIncome,
  amountExpenses: state.global.amountExpenses
}))(Main);
