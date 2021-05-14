import React from "react";
import { connect } from "react-redux";
import { changeDataTemp, showConfirmDialog } from "../../../redux/actions/global";
import PropTypes from 'prop-types';
//import {Link} from "react-router-dom";
import "./Main.css";

//imports from material-ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Paper, Tabs, Tab, Box, List, Divider, IconButton, CardHeader, Menu, MenuItem} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
//import Zoom from '@material-ui/core/Zoom';
//import Fab from '@material-ui/core/Fab';

//import translations
import {useTranslation} from "react-i18next";

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
//import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//import templates components
import ListItemWithAvatarAndButton from "../../Templates/ListItemWithAvatarAndButton/ListItemWithAvatarAndButton";

//import temporary data
//import dataTempMain  from "../../../helpers/dataMain";

//import functions globals
import {generateAmounts, formatAmount}  from "../../../helpers/globalFunctions";

//import dialogs
import NewMovement from "./NewMovement";

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

  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(2),
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
  const { dataTemp} = props;
  
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);
  const {balance, totalIncome, totalExpenses} = generateAmounts(dataTemp);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openDialogNewMovement, setOpenDialogNewMovement] = React.useState(false);
  const [typeMovement, setTypeMovement] = React.useState("");

  const [t, i18n] = useTranslation("global");//specify file name
  
  const fnOpenDialogNewMovement = function(){
    setOpenDialogNewMovement(true);
  }

  const fnCloseDialogNewMovement = function(){
    setOpenDialogNewMovement(false);
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const changeAmountBalance = (newAmount) => {
    const { dispatch } = props;
  
    dispatch(changeAmountBalance(newAmount));
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fnShowNewMovement = (typeMovement) => {
    handleClose();
    setTypeMovement(typeMovement);
    fnOpenDialogNewMovement();
  }

  const handleChangeDataTemp = (data) => {
    const { dispatch } = props;
    dispatch(changeDataTemp(data));
  };
  
  const removeMovement = (type, idMovement) => {
    const {dataTemp} = props;
    const movements = dataTemp[type];
    const newMovements = movements.filter((item) => item.id !== idMovement);
    const myData = {...dataTemp, [type]: newMovements};
    handleChangeDataTemp(myData);
  }
  
  const handleShowConfirmDialog = (data) => {
    const { dispatch } = props;
    dispatch(showConfirmDialog(data));
  };

  const confirmRemoveMovement = (type, idMovement) => {
    const dataConfirmDialog= {
      open: true,
      title: t("confirmDialog.title"),
      description: (type === "income")? t("confirmDialog.descriptionIncome") : t("confirmDialog.descriptionExpense"),
      fnOK: () => {
        removeMovement(type, idMovement);
      }
    };
    handleShowConfirmDialog(dataConfirmDialog);
  }


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
                        <Typography variant="h6"  color="primary"><b>{t("mainCard.balance")}</b></Typography>
                      </div>
                      
                      <Typography variant="h4" color="primary"><b>{formatAmount(balance, "USD", 2)} </b></Typography>

                      <div style={{display:"inline-flex", marginTop:"10px", width:"250px", justifyContent:"space-between"}}>
                        <div className="div-ingresos">
                          <Typography color="primary"><b>{formatAmount(totalIncome, "USD", 2)}</b></Typography>
                          <div style={{display:"inline-flex"}}>
                            <AddCircleOutlineIcon color="primary"/>
                            <Typography color="primary"><b>{t("mainCard.income")}</b></Typography>
                          </div>
                        </div>
                        
                        <div className="div-egresos">
                          <Typography color="error"><b>{formatAmount(totalExpenses, "USD", 2)}</b></Typography>
                          <div style={{display:"inline-flex"}}>
                            <RemoveCircleOutlineIcon color="error"/>
                            <Typography color="error"><b>{t("mainCard.expenses")}</b></Typography>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                </Card>
            </Paper>
          </Grid>
        
      </Grid>

      <Grid container justify="center"
          alignItems="center" spacing={2} style={{marginTop:"1rem"}}>
        
          <Grid item>

            <Paper style={{borderRadius:"10px"}}>
              
                <Card className="cards" style={{borderRadius:"10px"}}>
                    {/*<CardHeader>
                      <Typography variant="h6" color="primary" dir="right"><b>Movimientos</b></Typography>
                    </CardHeader>*/}
                    <CardHeader
                      action={
                        <>
                          <IconButton 
                            aria-label="options"
                            aria-controls="menuMovements"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit" >
                            <MoreVertIcon/>
                          </IconButton>
                          <Menu
                            id="menuMovements"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={() => fnShowNewMovement("income")}>{t("movements.menuItem1")}</MenuItem>
                            <MenuItem onClick={() => fnShowNewMovement("expenses")}>{t("movements.menuItem2")}</MenuItem>
                          </Menu>
                        </>
                      }
                      title={<Typography variant="h5" color="default" style={{fontWeight:"bolder"}}>{t("movements.title")}</Typography>}
                    />
                    <CardContent>
                    
                    
                    
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                    >
                      <Tab label={t("movements.income")} {...a11yProps(0)} />
                      <Tab label={t("movements.expenses")} {...a11yProps(1)} /> 
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      <List>
                        {dataTemp.income.map(item => (
                          <React.Fragment key={item.id}>
                            <ListItemWithAvatarAndButton
                              iconAvatar={generateIconAvatarIncome(item.category)}
                              textPrimary={`${item.description}`}
                              textSecondary={`${formatAmount(item.amount, "USD", 2)} - ${item.date}`}
                              iconAction={<DeleteIcon />}
                              callback={() => confirmRemoveMovement("income", item.id)}
                            />
                            <Divider />
                          </React.Fragment>
                        ))}
                      </List>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <List>
                        {dataTemp.expenses.map(item => (
                          <React.Fragment key={item.id}>
                            <ListItemWithAvatarAndButton
                              iconAvatar={generateIconAvatarExpenses(item.category)}
                              textPrimary={`${item.description}`}
                              textSecondary={`${formatAmount(item.amount, "USD", 2)} - ${item.date}`}
                              iconAction={<DeleteIcon />}
                              callback={() => confirmRemoveMovement("expenses", item.id)}
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

      <NewMovement 
          open={openDialogNewMovement}
          onOpen={fnOpenDialogNewMovement}
          onClose={fnCloseDialogNewMovement}
          type={typeMovement}/>
    </div>
  );
}

export default connect((state) => ({
  /*amountBalance: state.global.amountBalance,
  amountIncome: state.global.amountIncome,
  amountExpenses: state.global.amountExpenses,*/
  dataTemp: state.global.dataTemp,
}))(Main);
