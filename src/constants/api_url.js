const location = 'Buenos Aires,ar';
const api_key = '5adbdcb6d272223a6932ebb1d0918e82';
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;