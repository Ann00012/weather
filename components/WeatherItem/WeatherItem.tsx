"use client";
import { WeatherResponse } from "@/types/WeatherType";
import styles from "./WeatherItem.module.css";

interface WeatherItemProps {
  data: WeatherResponse;
}

export default function WeatherItem({ data }: WeatherItemProps) {
  return (
    <div className={styles.container}>
      <p className={styles.weatherDescription}>
        {data.weather[0]?.description.toUpperCase()}
      </p>

      <div className={styles.stats}>
        <div className={styles.row}>
          <span className={styles.label}>Temp max</span>
          <span className={styles.value}>{Math.round(data.main.temp_max)}°</span>
        </div>
        
        <div className={styles.row}>
          <span className={styles.label}>Temp min</span>
          <span className={styles.value}>{Math.round(data.main.temp_min)}°</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{data.main.humidity}%</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Cloudy</span>
          <span className={styles.value}>{data.clouds.all}%</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Wind</span>
          <span className={styles.value}>{data.wind.speed}m/sec</span>
        </div>
      </div>
      
      <hr className={styles.divider} />
    </div>
  );
}