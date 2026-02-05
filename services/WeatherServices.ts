import axios from 'axios';
import { WeatherResponse, GeocodingResponse } from '@/types/WeatherType';

const BASE_URL = "https://api.openweathermap.org";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY; 

export const fetchData = async (lat: number, lon: number) => {
  try {
    const response = await axios.get<WeatherResponse>(`${BASE_URL}/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,    
        units: 'metric',  
        lang: 'en'        
      }
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

export const getCity = async (city: string): Promise<GeocodingResponse | null> => {
  try {
    const response = await axios.get<GeocodingResponse[]>(`${BASE_URL}/geo/1.0/direct`, {
      params: {
        q: city,
        limit: 1,
        appid: API_KEY
      }
    });
    
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    console.error("Error fetching city coords:", error);
    throw error;
  }
};
