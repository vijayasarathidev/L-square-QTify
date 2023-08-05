// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
import axios from "axios";

const BACKEND_URL = "https://qtify-backend-labs.crio.do";
let BackEndPoint = `https://qtify-backend-labs.crio.do/`;

export const getUId = () => {
  let id = Math.random().toString(36).substr(3, 9);
  return id;
};

export const faqData = async () => {
  try {
      let res = await axios.get(`${BackEndPoint}faq`);
      return res.data;
  } catch (e) {
      console.log(`error from AxiosData Component ->`, e);
      return null;
  }
};

export const fetchTopAlbum = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/new`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/songs`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/genres`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
