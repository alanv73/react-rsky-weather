import { WeatherProvider } from './contexts/weatherContext';
import Grid from '@material-ui/core/Grid';
import CurrentWeatherCard from './CurrentWeatherCard';
import DailyWeather from './DailyWeather';
import DaySummaryList from './DaySummaryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Grid direction="column" >
          <CurrentWeatherCard />
          <DailyWeather />
        </Grid>
          <DaySummaryList />
        </WeatherProvider>
    </div>
  );
}

export default App;
