import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.city && this.props.data.country && <img src={`http://openweathermap.org/img/w/${this.props.data.icon}.png`}/>}
                { 
                    this.props.data.city && this.props.data.country && <p className="weather__key">Location: 
                   <span className="weather__value"> { this.props.data.city }, { this.props.data.country }</span>
                    </p>
                }
                {
                    this.props.data.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {this.props.data.temperature} [°C]</span>
                    </p>
                }
                {
                    this.props.data.humidity && <p className="weather__key">Humidity: 
                    <span className="weather__value"> {this.props.data.humidity} %
                    </span>
                    </p>
                }
                {
                    this.props.data.description && <p className="weather__key">Condition: 
                    <span className="weather__value"> {this.props.data.description.toUpperCase()}</span>
                    </p>
                }
                {
                    this.props.data.error && <p className="weather__key"> {this.props.data.error}</p>
                }

            </div>
        )
    }
}

export default Weather;