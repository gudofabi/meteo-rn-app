import { nowToHHMM } from "@/utils/date-time";
import { Title } from "../Title/Title";
import { s } from "./Clock.style";
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Title style={s.time}>{time}</Title>
    </>
  );
}
