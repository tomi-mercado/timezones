import { format } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

const USER_ZONE = "America/Bogota";

const eventInputDateStr = "2024-01-01";
const eventInputTimeStr = "12:00:00";
const eventInputZone = "Asia/Tokyo";

const eventInputDateTimeStr = `${eventInputDateStr}T${eventInputTimeStr}`;

const eventUTCDate = fromZonedTime(eventInputDateTimeStr, eventInputZone);
const eventInPlaceDate = toZonedTime(eventUTCDate, eventInputZone);
const eventUserDate = toZonedTime(eventUTCDate, USER_ZONE);

console.log(
  `In place event date: ${format(eventInPlaceDate, "yyyy-MM-dd HH:mm:ss")}`,
);
console.log(
  `Event date in user's time zone: ${format(
    eventUserDate,
    "yyyy-MM-dd HH:mm:ss",
  )}`,
);
