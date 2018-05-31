import React from "react";
import App from "../App.js";
import "../App.css";

class Logic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      temperature: [],
      weather: []
    };
  }

  getWeather(city) {
    if (city === "") {
      this.setState({
        weatherData: []
      });
    }
    return fetch(
      `http://openweathermap.org/data/2.5/weather?q=${city},IN&appid=b6907d289e10d714a6e88b30761fae22`
    )
      .then(res => {
        res.json().then(data =>
          this.setState({
            weatherData: data,
            temperature: data.main,
            weather: data.weather,
            climate: this.state.weather[0]
          })
        );
      })
      .catch(err => console.error(err));
  }

  onInputChange = event => {
    return this.setState({
      keyword: event.target.value
    });
  };

  getData(e) {
    let city = this.refs.city.value;
    city = city.charAt(0).toUpperCase() + city.slice(1);

    this.getWeather(city);

    e.preventDefault();
  }

  render() {
    let climate = this.state.weather[0] || { main: "" };

    return (
      <div>
        <form>
          <input
            placeholder="Enter City ...."
            ref="city"
            type="text"
            onChange={this.getData.bind(this)}
            onKeyPress={e => {
              if (e.key == "Enter") {
                e.preventDefault();
              }
            }}
          />

          <br />

          <br />
          {this.state.weatherData.length !== 0 ? (
            <div>
              <h3>
                <span>Temperature </span>: {this.state.temperature.temp}
              </h3>

              <h3>
                {" "}
                <span>Wind Speed </span>: {this.state.temperature.pressure}{" "}
              </h3>

              <h3>
                {" "}
                <span>Humidity</span> : {this.state.temperature.humidity}
              </h3>

              <h3>
                {" "}
                <span>Climate </span>: {climate.main}
              </h3>

              <h3>
                <span>Description </span>: {climate.description}
              </h3>
            </div>
          ) : (
            undefined
          )}
        </form>
      </div>
    );
  }
}
export default Logic;
