import { OrderInfo } from '@/components/orders/types';
import moment from 'moment';
import { Moment } from 'moment';
export function doScrolling(elementID: string, duration: number) {
  const el = document.getElementById(elementID);
  if (!el) return;
  const startingY = window.pageYOffset;
  const diff = el.offsetTop - startingY;
  let start: number;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

export function setTicker(
  interval: number,
  duration: number,
  onTick: (time: number) => void,
) {
  let time = 0;

  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      time += interval;
      if (time > duration) {
        clearInterval(intervalId);
        resolve(duration);
      }
      onTick(time);
    }, interval);
  });
}

export const clearifyDayDate = (date: Moment | Date): Moment => {
  return moment(date).hour(0).minute(0).second(0).millisecond(0);
};

export const clearifyHoursDate = (date: Moment | Date): Moment => {
  return (
    moment(date)
      .year(2020)
      .month(0)
      .days(0)
      // .hour(moment(date).hour() + (fixMoscowTimezone ? TIMEZONE_OFFSET : 0))
      // .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
  );
};

export const isToday = (day: Moment) => {
  return clearifyDayDate(day).isSame(clearifyDayDate(moment()));
};

export const calcOrdersTotalCost = (
  orders: ReadonlyArray<OrderInfo>,
): number | undefined => {
  return orders.reduce((prev?: number, cur?: OrderInfo) => {
    return (
      (prev ? prev : 0) +
      (cur && cur.price && cur.status && cur.status.indexOf('CANCELED') == -1
        ? cur.price
        : 0)
    );
  }, 0);
};

// // Converts numeric degrees to radians
// function toRad(degree: number) {
//   return (degree * Math.PI) / 180;
// }

// function calcCrow(from: Coordinates, to: Coordinates) {
//   const R = 6371; // km
//   const dLat = toRad(to.lat - from.lat); // to:2 from: 1
//   const dLon = toRad(to.lon - from.lon);
//   const lat1 = toRad(from.lat);
//   const lat2 = toRad(to.lat);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const d = R * c;
//   return d;
// }

// export const calculateCost = (
//   from: Coordinates | undefined,
//   to: Coordinates | undefined,
// ) => {
//   return calcCrow(from, to);
// };
