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
          <Grid justify="center" container direction="row" >
            <Grid className="days" item xs={'auto'}>
              <Grid container direction="column" >
                <Grid className="grid" item>
                  <CurrentWeatherCard />
                </Grid>
                <Grid className="grid" item>
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
