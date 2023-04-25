const ip = fetch("https://ipapi.co/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("ip", data.ip);
  });
