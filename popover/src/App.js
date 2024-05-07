import React from 'react';
import Card from './components/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RecommendationCard from './components/RecommendationCard';

const theme = createTheme();

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <RecommendationCard title="Top Recommendations" />
      </ThemeProvider>
  );
};

export default App;