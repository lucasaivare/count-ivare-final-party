"use client"
import dynamic from "next/dynamic";
import { Orbitron } from 'next/font/google';
import { useEffect, useState } from "react";

const orbitron = Orbitron({ subsets: ['latin'] })

const finalDate = new Date("12/07/2023");
const initialSeconds = Math.round((finalDate.getTime() - new Date().getTime()) / 1000);

function Home() {
  const [totalSeconds, setTotalSeconds] = useState<number>(initialSeconds);

  function secondsToTime(): { days: number, hours: number, minutes: number, seconds: number } {
    let tempSeconds = totalSeconds;
    const days = Math.floor(tempSeconds / (24 * 60 * 60));
    tempSeconds %= (24 * 60 * 60);

    const hours = Math.floor(tempSeconds / (60 * 60));
    tempSeconds %= (60 * 60);

    const minutes = Math.floor(tempSeconds / 60);
    const seconds = tempSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (totalSeconds <= 0) {
        return;
      }
      setTotalSeconds(totalSeconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [totalSeconds]);

  const finalTime = secondsToTime();

  return (
    <main className={`flex h-screen w-full flex-col items-center justify-center ${orbitron.className}`}>
      {totalSeconds > 0 ?
        <h1 className="text-4xl text-green-600 text-center w-full">
          {finalTime.days} dias {finalTime.hours} horas {finalTime.minutes} minutos e {finalTime.seconds} segundos
        </h1>
        :
        <video
          src="video.mp4"
          autoPlay
          controls
          width="100%"
          loop
        />
      }
    </main>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false }) 