function setDate() {
  d = new Date();
  const htime = d.getHours();
  const mtime = d.getMinutes();
  const stime = d.getSeconds();

  // hrotation = (htime / 12) * 360 + (mtime / 60) * 30 + 90;
  // mrotation = (mtime / 60) * 360 + (stime / 60) * 6 + 90;
  // srotation = (stime / 60) * 360 + 90;

  hrotation = (htime / 12) * 360 + mtime / 60;
  mrotation = (mtime / 60) * 360 + stime / 60;
  srotation = (stime / 60) * 360;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}

setInterval(setDate, 1000);

setDate();
