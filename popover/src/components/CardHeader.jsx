import React from 'react';
import { makeStyles } from '@mui/styles';
import CustomizedTypography from './CustomizedTypography';
import { fontWeight } from '@mui/system';
 
const useStyles = makeStyles({
  cardHeaderContainer: {
    padding: "0px 20px",
  },
  cardHeaderTitle: {
    textAlign: 'left',
    font: 'normal normal medium 16px/60px Satoshi',
    fontSize: "11px",
    color: '#000000',
    opacity: 1,
    fontWeight: 'bold',
  },
});
 
const CardHeader = ({ title }) => {
  const classes = useStyles();
 
  return (
<div className={classes.cardHeaderContainer}>
<CustomizedTypography  className={classes.cardHeaderTitle}>
        {title}
</CustomizedTypography>
</div>
  );
};
 
export default CardHeader;