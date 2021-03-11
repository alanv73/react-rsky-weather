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
          <Grid direction="column" >
            <CurrentWeatherCard />
            <DailyWeather />
          </Grid>
          <DaySummaryList />
        </WeatherProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
