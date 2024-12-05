import { format } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

const USER_ZONE_A = "America/Bogota";
const USER_ZONE_B = "America/Argentina/Buenos_Aires";

// We need 3 fields in Salesforce.
// One string with a regex for dates
const eventInputDateStr = "2024-01-01";
// One string with a regex for times
const eventInputTimeStr = "12:00:00";
// One picklist with timezones
const eventInputZone = "Asia/Tokyo";

// We need to combine the date and time strings
const eventInputDateTimeStr = `${eventInputDateStr}T${eventInputTimeStr}`;

// From the combined string, we obtain the UTC date
const eventUTCDate = fromZonedTime(eventInputDateTimeStr, eventInputZone);

// With this UTC, we can obtain the hour of the event in any place of the world
const eventInPlaceDate = toZonedTime(eventUTCDate, eventInputZone);
const eventUserADate = toZonedTime(eventUTCDate, USER_ZONE_A);
const eventUserBDate = toZonedTime(eventUTCDate, USER_ZONE_B);

console.log(
  `In place event date: ${format(eventInPlaceDate, "yyyy-MM-dd HH:mm:ss")}`,
); // 2024-01-01 12:00:00
console.log(
  `Event date in user A's time zone: ${format(
    eventUserADate,
    "yyyy-MM-dd HH:mm:ss",
  )}`, // 2023-12-31 22:00:00
);
console.log(
  `Event date in user B's time zone: ${format(
    eventUserBDate,
    "yyyy-MM-dd HH:mm:ss",
  )}`, // 2023-12-31 00:00:00
);
