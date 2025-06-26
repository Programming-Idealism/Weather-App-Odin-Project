'use strict';

import retrieveApi from './ApiFetcher';
import { convertTemperature, getIcon } from './Utilities';

const searchField = document.getElementById('search-field');
const submitButton = document.querySelector('.submitted-input');
const conversionButton = document.querySelector('.temperature-conversion');
const resultsContainer = document.createElement('div');
const forecastContainer = document.createElement('div');

forecastContainer.classList.add('weather-blocks');
forecastContainer.style.display = 'none';
document.body.appendChild(resultsContainer);
document.body.appendChild(forecastContainer);
conversionButton.style.display = 'none';
const message = document.createElement('p');
let isVisible = true;
document.body.appendChild(message);
message.textContent = 'Please insert Location';
message.className = 'message';

function setMessage() {
  isVisible = !isVisible;
  message.style.visibility = isVisible ? 'visible' : 'hidden';
}
setInterval(setMessage, 3000);

let currentUnit = 'F';

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const location = searchField.value.trim();
  if (!location) return;
  const data = await retrieveApi(location);
  const days = data.days;
  if (!data) return;
  resultsContainer.innerHTML = '';
  forecastContainer.innerHTML = '';
  currentUnit = 'F';
  conversionButton.textContent = '°C';
  conversionButton.style.display = 'inline-block';
  conversionButton.classList.add('celsius');
  conversionButton.classList.remove('fahrenheit');
  displayWeather(data, currentUnit);
  getNextDays(data.days, data, currentUnit);
  message.remove();
});

searchField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitButton.click();
  }
});

conversionButton.addEventListener('click', () => {
  const tempElement = document.querySelector('.temp-value');
  const unitElement = document.querySelector('.temp-unit');
  if (!tempElement || !unitElement) return;

  const temp = parseFloat(tempElement.textContent);
  const unit = unitElement.textContent;
  const newTemp = convertTemperature(temp, unit);
  const newUnit = unit === 'F' ? 'C' : 'F';

  tempElement.textContent = newTemp.toFixed(1);
  unitElement.textContent = newUnit;
  conversionButton.textContent = `°${unit}`;
  conversionButton.classList.toggle('fahrenheit', unit === 'F');
  conversionButton.classList.toggle('celsius', unit === 'C');
  document
    .querySelectorAll('.forecast-temp, .forecast-max, .forecast-min')
    .forEach((element) => {
      const temp = parseFloat(element.textContent);
      const unit = element.dataset.unit;
      const newTemp = convertTemperature(temp, unit);
      const newUnit = unit === 'F' ? 'C' : 'F';
      element.textContent = newTemp.toFixed(1);
      element.dataset.unit = newUnit;
      const unitSpan = element.nextElementSibling;
      if (unitSpan && unitSpan.classList.contains('temp-unit')) {
        unitSpan.textContent = newUnit;
      }
    });
});

function displayWeather(data, unit) {
  resultsContainer.innerHTML = '';
  const block = document.createElement('div');
  block.classList.add('weather-block');

  let currentTemp = data.currentConditions.temp;
  const condition = data.currentConditions.conditions;
  const icon = getIcon(condition);
  const humidity = data.currentConditions.humidity;
  const wind = data.currentConditions.windspeed;
  const precipicationProbability = data.currentConditions.precipprob;

  block.innerHTML = `
    <div class="main-information">
    <h1 id="address">${data.resolvedAddress}</h1>
    <h2 id="today">Today:</h2>
    <p class="info">Temp: <span class="temp-value">${currentTemp}</span>°<span class="temp-unit">${unit}</span></p>
    <p>Condition: ${data.currentConditions.conditions} ${icon} </p>
    <div class="information">
     <p class="details"> Humidity: ${humidity}% </p> 
     <p class="details"> Wind: ${wind} KM/H </p>
     <p class="details"> Chance of Rain: ${precipicationProbability}%</p>
    </div>
    </div>
    `;
  resultsContainer.appendChild(block);
}

function getNextDays(days, data, unit) {
  const headline = document.createElement('h2');
  headline.textContent = `As for the next two weeks...`;
  headline.setAttribute('id', 'headline');
  forecastContainer.appendChild(headline);
  forecastContainer.style.display = 'flex';
  days.forEach((day) => {
    const date = day.datetime;
    const temp = day.temp;
    const tempMax = day.tempmax;
    const tempMin = day.tempmin;
    const precipicationProbability = day.precipprob;
    const condition = data.currentConditions.conditions;
    const icon = getIcon(condition);
    console.log(day);
    const block = document.createElement('div');

    block.innerHTML = `
  <div class="other-days-container">
    <div class="other-days-data">
      <span>${date} |</span>
      <span class="forecast-temp" data-unit="F">${temp.toFixed(1)}</span>°
      <span class="temp-unit">${unit}</span> ${icon}
    </div>
    <div class="additional-wrapper">
      <span>Max temp: <span class="forecast-max" data-unit="F">${tempMax.toFixed(
        1
      )}</span>°<span class="temp-unit">${unit}</span></span>
      <span>Min temp: <span class="forecast-min" data-unit="F">${tempMin.toFixed(
        1
      )}</span>°<span class="temp-unit">${unit}</span></span>
      <span>Chance of Rain: ${precipicationProbability}%</span>
    </div>
  </div>
`;
    forecastContainer.appendChild(block);
  });
}
