import { WeatherProvider } from './contexts/weatherContext';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CurrentWeatherCard from './CurrentWeatherCard';
import DailyWeatherTabs from './DailyWeatherTabs';
import DaySummaryList from './DaySummaryList';
import theme from './styles/theme';
import './App.css';

function App() {
  document.title = "Raspberry Sky";
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <WeatherProvider>
          <Grid className="main" justify="center" container direction="row" spacing={0} >
            <Grid className="grid" item xs={6}>
              <Grid justify="flex-start" container spacing={1} direction="column" >
                <Grid item xs={12}>
                  <CurrentWeatherCard />
                </Grid>
                <Grid item xs={12}>
                  <DailyWeatherTabs />
                </Grid>
              </Grid>
            </Grid>
            <Grid className="days" item xs={4}>
              <DaySummaryList />
            </Grid>
          </Grid>
        </WeatherProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
