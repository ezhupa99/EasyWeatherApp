//Interacting with DOM
const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = data => {
	const cd = data.cd;
	const w = data.w;

	//update details template
	details.innerHTML = `
    <h5 class="my-3">${cd.EnglishName}</h5>
    <div class="my-3">${w.WeatherText}</div>
    <div class="display-4 my-3">
        <span>${w.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

	//remove the d-none class if user Pressed Enter
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none');
	}
};

const updateCity = async city => {
	const cityDetails = await getCity(city);
	const weather = await getWeather(cityDetails.Key);

	return {
		cd: cityDetails,
		w: weather
	};
};

cityForm.addEventListener('submit', e => {
	//prevent Default Action of Form
	e.preventDefault();

	//getCity Value
	const city = cityForm.city.value.trim();
	cityForm.reset();

	//update UI
	updateCity(city)
		.then(data => {
			updateUI(data);
		})
		.catch(err => {
			console.log(err);
		});
});
