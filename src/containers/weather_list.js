import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    //render a single city (or row)
    renderWeather(cityData) {
        const name = cityData.city.name;
        //loop over all temps to create an array of temperatures
        //if you want to convert the units, you can use map
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //below is the same as:
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} units="K" color="orange" /></td>
                <td><Chart data={pressures} units="hPa" color="purple" /></td>
                <td><Chart data={humidities} units="%" color="red" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

//we use state.weather because we assigned our weather_reducer to our weather key in combinedReducers
//passing in ({ weather }) is the same as 'const weather = state.weather'
function mapStateToProps({ weather }) {
    return { weather };  //is the same as  { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);