import qs from "qs";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

// [GET] Comics 리스트
export async function apiGetComics() {
  return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

// [GET] Events 리스트
export async function apiGetEvents({ pageParam = 0 }) {
  console.log(pageParam);
  const offset = pageParam * 10;
  return await fetch(
    `${BASE_URL}/events?limit=20&offset=${offset}&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
}

// [GET] Characters 리스트
export async function apiGetCharacters({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(
      `${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// params: id
// [GET] Characters Detail
export async function apiGetCharacterDetail({ queryKey }) {
  const id = queryKey[1].id;
  try {
    return await fetch(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
// 이메일
export async function apiPostGoogleEmail(data) {
  // const formData = new FormData();
  // formData.append("name", data.name);
  // formData.append("email", data.email);
  // formData.append("message", data.message);
  console.log(data);
  try {
    return await fetch(
      "https://script.google.com/macros/s/AKfycbxzxswXHNrK16GEMu2Pq0VZl-W_hwHNA8y71XToNLjNTKkzQ7d32V-WVRkTSCwVpDNEOg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify(data),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
