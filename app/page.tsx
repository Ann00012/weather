"use client";
import { fetchData, getCity } from "@/services/WeatherServices";
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import WeatherItem from "@/components/WeatherItem/WeatherItem";
import SearchBox from "@/components/SearchBox/SearchBox";
import toast,{ Toaster } from "react-hot-toast";
import css from "./page.module.css";
import Loader from "./loading";
import Image from "next/image";

export default function Home() {
  const [city, setCity] = useState("London");
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["weather", city],
    queryFn: async () => {
      const coords = await getCity(city);
      if (!coords) {
        toast.error("Can not find city");
        throw new Error("Can not find city")
      };
      return await fetchData(coords.lat, coords.lon);
    },
    enabled: !!city,
    placeholderData: keepPreviousData,
  });

  const getBackground = (weatherMain: string) => {
    const bgs: Record<string, string> = {
      Clear: "/clear.jpg",
      Clouds: "/clouds.jpeg",
      Rain: "/rain.jpg",
      Snow: "/snow.jpg",
      Sunny: "/sunny.jpg",
      Thunderstorm: "/thunder.jpg",
      Drizzle: "/drizzle.jpg",
      Mist: "/mist.jpg",
      Fog: "/mist.jpg",
      Dust: "/dust.jpg",
    };
    return bgs[weatherMain] || "/default.jpg";
  };

  const currentBg =
    isSuccess && data ? getBackground(data.weather[0].main) : "/default-bg.jpg";

  const handleSearch = (newQuery: string) => {
    setCity(newQuery);
  };
  return (
    <div
      className={css.weatherPage}
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <div className={css.mainContent}>
        <div className={css.logo}>WW⚡</div>
        {isSuccess && data && (
          <div className={css.mainInfo}>
            <span className={css.temp}>{Math.round(data.main.temp)}°</span>
            <div className={css.locationBox}>
              <span className={css.cityName}>{city}</span>
            </div>
            <div className={css.weatherIcon}>
              {data.weather.map((item) => (
                <Image
                  key={item.id}
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt={item.description}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <aside className={css.sidePanel}>
        <SearchBox onSearch={handleSearch} />
        <main>
          {isLoading && <Loader />}
          {isError && <p>Error: {(error as Error).message}</p>}
          {isSuccess && data && <h2>{data.name}</h2>}
          {isSuccess && data && <WeatherItem data={data} />}
        </main>
      </aside>
    </div>
  );
}
