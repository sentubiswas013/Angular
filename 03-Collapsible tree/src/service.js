import axios from 'axios';
import { dataDcr } from './data';

// export async function fetchDCRData() {
//   try {
//     const response = await fetch('/data.json'); // Adjust the path according to your project structure
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const jsonData = await response.json();
//     return jsonData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

export const fetchDCRData = async () => {
  console.log("dataDcr-----", dataDcr)
  // try {
  //   const response = await axios.get('/data.json');
  //   setData(response.data);
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  // }
};


// export async function fetchFeatureMapData() {
//   try {
//     const response = await fetch('/data.json'); // Adjust the path according to your project structure
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const jsonData = await response.json();
//     return jsonData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

export const fetchFeatureMapData = async () => {
  try {
    const response = await axios.get('/data.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};