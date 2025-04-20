const apiKey = "4f6442d4f64b4b14833141103251804";

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  if (!location) return alert("Please enter a city name!");

  const loader = document.getElementById("loader");
  const info = document.getElementById("weatherInfo");
  loader.style.display = "block";
  info.style.display = "none";

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`
    );
    const data = await response.json();

    document.getElementById("city").innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").innerText = `🌡️ ${data.current.temp_c}°C`;
    document.getElementById("condition").innerText = `🌀 ${data.current.condition.text}`;
    document.getElementById("airQuality").innerText = `Air Quality Index: ${data.current.air_quality.pm2_5.toFixed(2)}`;

    info.style.display = "block";
  } catch (error) {
    alert("Couldn't fetch weather. Please try again.");
  } finally {
    loader.style.display = "none";
  }
}

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
