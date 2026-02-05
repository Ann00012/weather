interface Weather { 
    id: number,
    main: string,
    description: string
    icon:string
}

interface Main { 
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
    
}

interface Wind { 
    speed: number,
}

export interface WeatherResponse { 
    coord: {
    lon: number;
    lat: number;
    };
    weather: Weather[];
    base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds:{all: number;
    };
    sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface GeocodingResponse {
    zip:string,
  name: string;
  lat: number;
  lon: number;
  country: string;

}