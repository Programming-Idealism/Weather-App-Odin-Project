'use strict';

import './DOMHandler';

function convertTemperature(value, unit) {
  if (unit === 'F') {
    return ((value - 32) * 5) / 9;
  } else if (unit === 'C') {
    return (value * 9) / 5 + 32;
  } else {
    throw new Error(`Invalid unit`);
  }
}

const conditionToIcon = {
  clear: '☀️',
  'partially cloudy': '🌤️',
  overcast: '☁️',
  'rain, partially cloudy': '🌧️',
  rain: '🌧️',
  'rain, overcast': '🌧️',
  drizzle: '🌦️',
  thunderstorm: '⛈️',
  snow: '❄️',
  fog: '🌫️',
  haze: '🌁',
  mist: '🌫️',
};

function getIcon(condition) {
  return conditionToIcon[condition.toLowerCase()] || '❓';
}

export { convertTemperature, getIcon };
