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
