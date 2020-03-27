//GetWeather
const getWeather = async cityID => {
	//WeatherApiKey should be found on the scripts/key.js file as a string
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${cityID}?apikey=${WeatherApiKey}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

//GetCity Info
const getCity = async city => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${WeatherApiKey}&q=${city}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};
