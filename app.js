let pm = true;
document.querySelector("button").onclick = () => {
  pm = !pm;
  const clock = () => {
    const date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    if (pm) {
      hours = hours - 12;
      document.querySelector("button").innerText = "BACK";
      document.getElementById(
        "MyClockDisplay"
      ).innerText = `${hours}:${minute}:${second} PM`;
    } else {
      document.querySelector("button").innerText = "PM";
      document.getElementById(
        "MyClockDisplay"
      ).innerText = `${hours}:${minute}:${second}`;
    }
  };
  setInterval(() => {
    clock();
  }, 1000);
};
