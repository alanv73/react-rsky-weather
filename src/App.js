import { WeatherProvider } from './contexts/weatherContext';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CurrentWeatherCard from './CurrentWeatherCard';
import DailyWeather from './DailyWeather';
import DaySummaryList from './DaySummaryList';
import theme from './styles/theme';
import './App.css';

function App() {
  document.title = "Raspberry Sky";
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <WeatherProvider>
          <Grid sm={true} className="grid" container direction="column" >
            <Grid item>
              <CurrentWeatherCard />
            </Grid>
            <Grid item>
              <DailyWeather />
            </Grid>
          </Grid>
          <DaySummaryList />
        </WeatherProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
