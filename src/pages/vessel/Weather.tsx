
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
//import { styled } from '@mui/system';

import { Box } from '@mui/system';
import { WiDaySunny } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
//import { WiCloud } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiDaySunnyOvercast } from "weather-icons-react";



import './Weather.css';
import { styled } from '@mui/styles';

interface WeatherProps {
    lat: number;
    lon: number;
}
interface WeatherData {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    pressure_mb: number;
    vis_km: number;
    condition: any;
    //country: string;
    // Add other properties as needed
}
interface LocationData {
    name: string;
    country: string;
    // Add other properties as needed
}


// Create a mapping of weather conditions to icons
const weatherIcons = {
    'Sunny': <WiDaySunny style={{ fontSize: "55px", color: "#d9d9d6" }} />,
    'Rainy': <WiRain style={{ fontSize: "55px", color: "#d9d9d6"  }}/>,
    'Light rain': <WiRain style={{ fontSize: "55px", color: "#d9d9d6"  }}/>,
    'Cloudy': <WiCloudy style={{ fontSize: "55px" }} />,
    'Partly cloudy': <WiDayCloudy style={{ fontSize: "55px", color: "#d9d9d6" }}/>,
    'Overcast': <WiDaySunnyOvercast style={{ fontSize: "55px", color: "#d9d9d6"  }} />,
    'Clear': <WiDaySunny style={{ fontSize: "55px", color: "#d9d9d6"  }} />,
    
    // Add a mapping for partly cloudy weather
    // Add more mappings as needed
};


const styles = {

    content: {
        padding: '0px',
        margin: '0px',
        width: '100%'


    },
    header: {
        paddingLeft: '20px',

        justifyContent: 'center',
        alignItems: 'start',
        padding: '0px',
        margin: '0px',
        marginTop: '14px',

    },
   
    headerRight: {
        justifyContent: 'center',
        padding: '0px',
        margin: '0px',
        marginTop: '14px',
        paddingRight: '20px',


    },
    headerTitle: {
        fontSize: '13px',

    },

    headerSub: {
        fontSize: '11px',
        color: '#d9d9d6',

    },
    headerTemp: {
        fontSize: '18px',
        color: '#00C9FF',

    },
    weatherIcon: {
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffc01d',
        paddingTop: '8px',
        paddingBottom: '8px',
    },
    footer: {
        padding: '8px',
        paddingTop: '12px',
        paddingBottom: '12px',
        height: '100%', 
      },
    footerTitle: {
        padding: '0px',
        fontSize: '11px',

    },
    footerValue: {
        marginTop: '4px',
        padding: '0px',
        margin: '0px',
        fontSize: '13px',

    },

    title: {
        alignSelf: 'start',
        fontSize: '15px',
        paddingLeft: '20px',
        //marginBottom: '10px',
        margin: '0px',

        paddingBottom: '6px',
        width: '100%',

    },
    element: {
        borderTop: '4px solid #072f47',
        paddingTop: '8px',
        paddingBottom: '14px',
        fontSize: '13px',
        //  display: 'flex',
        justifyContent: 'center', // Align items to the start of the flex container

    },
    temp: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10px',
    },
    tempValue: {
        fontSize: '23px',
        fontWeight: 'bold',
        color: '#00C9FF',

    },
    
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },


};
const Header = styled('div')(styles.header);
const WeatherIcon = styled('div')(styles.weatherIcon);
const Footer = styled('div')(styles.footer);
const FooterTitle = styled('div')(styles.footerTitle);
const FooterValue = styled('div')(styles.footerValue);
const Temp = styled('div')(styles.temp);
const TempValue = styled('div')(styles.tempValue);
//const Content = styled('div')(styles.content);
//const Title = styled('div')(styles.title);
//const Element = styled('div')(styles.element);
//const Value = styled('div')(styles.value);
//const Sup = styled('sup')(styles.sup);
//const Grid = styled('div')(styles.grid);
//const Item = styled('div')(styles.item);
/*
const weatherIcons = {
    'Sunny': <WbSunnyIcon />,
    'Rainy': <GrainIcon />,
    'Cloudy': <CloudIcon />,
    // Add more mappings as needed
}; */


const Weather: React.FC<WeatherProps> = ({ lat, lon }) => {
    const { theme } = useContext(ThemeContext);


    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = 'https://api.weatherapi.com/v1/current.json'; // WeatherAPI.com Base URL
    const apiKey = 'ff7e41414ed04cce94e153442242203'; // Replace with your WeatherAPI.com API key

    const [location, setLocation] = useState<LocationData | null>(null);
    const [title, setTitle] = useState<string>("Weather");


    useEffect(() => {
        const fetchWeather = async () => {

            setIsLoading(true);
            try {
                const response = await axios.get(`${baseUrl}?key=${apiKey}&q=${lat},${lon}`);

                // Extract relevant weather data from response
                const currentWeather = response.data.current; // Save entire current object
                const locationData = response.data.location; // Save location name

                setTitle(locationData.name + ", " + locationData.country);
                setTitle(locationData.name);



                setWeather(currentWeather);
                setLocation(locationData);

                console.log("Weather log", response.data); // Log the entire object

            } catch (error) {
                // ... (error handling)
            } finally {
                setIsLoading(false);
            }
        };

        if (lat && lon) {
            fetchWeather();
        }
    }, [lat, lon]);


    return (
        <>
            <Card className={`amplify-card ${theme}`} height="100%" borderRadius="15px" position="relative" margin="0" padding="0">
                <Header>
                        <Box display="flex" alignItems="center" style={{ position: 'relative' }}>
                            <h2 style={styles.headerTitle}>{title}</h2>
                            <img src={`/flags(Country)/${location?.country}.png`} width="20" height="13" style={{ marginLeft: '8px' }} />
                        </Box>
                        <p style={styles.headerSub}>{weather?.condition.text}</p>
                 
                </Header>

                <WeatherIcon>
                    {weather ? weatherIcons[weather.condition.text] : null}

                </WeatherIcon>
                <Temp>
                <TempValue>{weather?.temp_c} °C</TempValue>


                </Temp>



                {isLoading ? (

                    <p>Loading...</p>
                ) : weather ? (
                    <Footer>


                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>


                            <Box sx={styles.item}>
                                <FooterTitle>Wind</FooterTitle>
                                <FooterValue>{weather.wind_kph} mph</FooterValue>
                            </Box>
                            <Box sx={styles.item}>
                                <FooterTitle>Humidity</FooterTitle>
                                <FooterValue>{weather.humidity}%</FooterValue>
                            </Box>
                            <Box sx={styles.item}>
                                
                                <FooterTitle>Pressure</FooterTitle>

                                <FooterValue>{weather.pressure_mb} mb</FooterValue>
                            </Box>
                        </Box>                            </Footer>

                ) : (
                    <p>Failed to fetch weather data</p>
                )}

            </Card>
        </>
    );
};

export default Weather;

/*
import { WeatherWidget } from "@daniel-szulc/react-weather-widget"
import React from 'react';
import './Weather.css';

interface WeatherProps {
    lat: number;
    lon: number;
}

const Weather: React.FC<WeatherProps> = ({ lat, lon }) => {
    return (
        <>
            <div className="weather-widget">

                <WeatherWidget
                    lat={lat}
                    lon={lon}
                /*  apiKey="ff7e41414ed04cce94e153442242203"
                  showForecast={false}
                  showDetails={false}
                  showWind={true}
                  showPressure={true}
                  showHumidity={true}
                  showSunrise={true}
                  showSunset={true}
                  showMoonrise={true}
                  showMoonset={true}
                  showPrecipitation={true}
                  showUvIndex={true}
                  showAirQuality={true}
                  showVisibility={true}
                  showCloudCover={true}
                  showFeelsLike={true}
                  showDewPoint={true}
                  showWindGust={true}
                  showWeatherIcon={true}
                  showWeatherText={true}
                  showWeatherDescription={true}
                  showWeatherTemperature={true}
                  showWeatherFeelsLike={true}
                  showWeatherWind={true}
                  showWeatherPressure={true}
                  showWeatherHumidity={true}
                  showWeatherDewPoint={true}
                  showWeatherUvIndex={true}
                  showWeatherVisibility={true}
                  showWeatherCloudCover={true}
                  showWeatherPrecipitation={true}
                  showWeatherSunrise={true}
                  showWeatherSunset={true}
                  showWeatherMoonrise={true}
                  showWeatherMoonset={true}
                  showWeatherWindGust={true}
                  showWeatherAirQuality={true}
                  showWeatherAlerts={true}
                  showWeatherWarnings={true}
                  showWeatherErrors={true}
                  showWeatherLoading={true}
                  showWeatherLocation={true}
                  showWeatherTimestamp={true}
                  showWeatherRefreshButton={true}
                  showWeatherPoweredBy={true}
                  showWeatherUnits={true}
                  showWeatherTheme={true}
                  showWeatherBackground={true}
                  showWeatherBorder={true}
                  showWeatherRadius={true}
                  showWeatherShadow={true}
                  showWeatherFont={true}
                  showWeatherTextAlign={true}
                  showWeatherTextTransform={true}
                  showWeatherTextShadow={true}
                  showWeatherTextDecoration={true}
                  showWeatherTextOverflow={true}
                  showWeatherTextWrap={true}
                  showWeatherTextAlignLast={true}
                  showWeatherTextJustify={true}
                  showWeatherTextDirection={true}
                  showWeatherTextOrientation={true}
                  showWeatherTextCombineUpright={true}
                  showWeather 
                ></WeatherWidget>
            </div>
        </>
    )
};

export default Weather; */