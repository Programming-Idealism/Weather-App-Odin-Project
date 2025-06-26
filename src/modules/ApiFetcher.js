'use strict';

export default async function retrieveApi(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=99PJ4U5B2EK7MNTU3XZCQDBNL&contentType=json`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(
        `Failed to retrieve weather's resources. ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
