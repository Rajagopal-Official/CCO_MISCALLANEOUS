import React from "react";
import { Card, CardContent, Typography, IconButton, Box, Grid, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as BookmarkIcon } from '../assets/Dashboard/bookmark.svg';
import graph from '../assets/Dashboard/graph.png';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: "10px",
    height: "auto",
    width: "430px",
    position: "relative",
    fontSize: "14px",
    background: 'green'
  },
  customBookmarkIcon: {
    paddingTop: "0px",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nodePoolRightsizing: {
    background: "#46F0D1",
    borderRadius: "4px",
    opacity: 1,
    padding: "8px",
    color: "black",
    whiteSpace: "nowrap",
    fontSize: "12px",
    marginTop: "0px",
    right: 10,
    position: "absolute",
    top: 14,
  },
  greenText: {
    color: "green",
  },
  redText: {
    color: "red",
  },
  lowerCardContainer: {
    background: '#F5FFF7',
    padding: '16px',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  graphContainer: {
    width: "30%",
    textAlign: "right",
  },
  graphImage: {
    maxWidth: "100%",
    height: "auto",
  },
  savingsContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  savingsText: {
    color: "green",
    fontWeight: "bolder",
    fontSize: "24px",
    display: "inline-block",
    marginRight: "8px",
  },
  percentageText: {
    fontSize: "14px",
    color: 'green',
    display: "inline-block",
  },
  timeperiodText: {
    fontSize: "14px",
    color: 'black',
    marginTop: '8px'
  },
  iconButtonHover: {
    '& .MuiIconButton-root:hover': {
      backgroundColor: 'transparent', 
    },
  },
}));

const RecommendationCard = ({ title }) => {
  const classes = useStyles();
  const data = [
    {
      recommendations: "my-node-group",
      monthlySpendWithRecommendations: "$4.03",
      monthlySpendWithoutRecommendations: "$35.71",
      monthlySavings: "$31.68",
      percentage: "88%",
      timeperiod: 'Mar 01 - Mar 26'
    },
    {
      recommendations: "metrics-server",
      monthlySpendWithRecommendations: "$22.10",
      monthlySpendWithoutRecommendations: "$42.75",
      monthlySavings: "$31.68",
      percentage: "88%",
      timeperiod: 'Mar 01 - Mar 26'
    },
    {
      recommendations: "aws-node",
      monthlySpendWithRecommendations: "$18.90",
      monthlySpendWithoutRecommendations: "$39.25",
      monthlySavings: "$31.68",
      percentage: "88%",
      timeperiod: 'Mar 01 - Mar 26'
    },
  ];

  return (
    <>
      <Typography variant="h5" align="left" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
            <Card variant="outlined" className={classes.cardContainer} sx={{ background: '#FFFFFF', height: '310px', width: '430px' }}>
              {/* Box to hold NodepoolRightsizing and bookmarkicon */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <div className={classes.nodePoolRightsizing}>Nodepool Rightsizing</div>
                <div className={classes.iconButtonHover}> 
                  <IconButton>
                    <div className={classes.customBookmarkIcon}>
                      <BookmarkIcon />
                    </div>
                  </IconButton>
                </div>
              </Box>
              <br />
              <Typography sx={{ paddingLeft: '30px', marginTop: '-40px' }} variant="body1">{item.recommendations}</Typography>
              <Divider sx={{ marginTop: '15px' }} />
              <CardContent sx={{ padding: '0' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body1">Potential Monthly Spend (by mar 25)</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: "bold" }} className={classes.greenText} variant="h4">
                      {item.monthlySpendWithRecommendations}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                      With recommendations:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: "bold" }} className={classes.redText} variant="h4">
                      {item.monthlySpendWithoutRecommendations}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                      Without recommendations:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.lowerCardContainer}>
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                      <Grid item xs={12} className={classes.contentContainer}>
                        <Box className={classes.savingsContainer}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Potential Monthly Savings
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <Typography
                              sx={{ fontSize: '24px', fontWeight: 'bold' }}
                              className={classes.savingsText}
                              variant="h6"
                            >
                              {item.monthlySavings}
                            </Typography>
                            <Typography className={classes.percentageText} variant="body1">
                              ({item.percentage})
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={classes.graphContainer}>
                          <img src={graph} alt="Graph" className={classes.graphImage} />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.timeperiodText} variant="body1">
                          {item.timeperiod}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecommendationCard;