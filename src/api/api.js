import axios from "axios";

import { getCookie, setCookie, deleteCookie } from './cookie';

const instance = axios.create({
  baseURL: 'http://46.101.160.28',
  // baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    "Content-Type": 'application/json',
    // "Session-ID": 'test',
    // "Cookie": 'sid=1622391366948sashatest'
  }
})


//решить вопрос с cookie

export const authorization = {
  login(login, password) {
    return instance.get(
      `/authorization/login/?login=${login}&password=${password}`,
      { headers: { "Session-ID": getCookie('sid') } }
      )
      .then((res) => {
        setCookie('sid', res.data.sid)
        return res;
      })
  },

  logout() {
    return instance.get(
      `/authorization/logout`,
      { headers: { "Session-ID": getCookie('sid') } }
    )
      .then((res) => {
        deleteCookie('sid');
        return res;
      })
  },

  registration(login, password) {
    return instance.get(`/authorization/registration/?login=${login}&password=${password}`)
  }
}

export const cosmeticBag = {
  getBag() {
    return instance.get(
      `/cosmetic-bag`,
      { headers: { "Session-ID": getCookie('sid') } }
    )
  },

  // body = {
  //   category: '',
  //   section: '',
  //   state: []
  // }
  editBag(body) {
    return instance.put(`/cosmetic-bag`, body, { headers: { "Session-ID": getCookie('sid') } })
  }
}

export const calendar = {
  getUserPlan(date) {
    return instance.get(`/calendar/?date=${date}`, { headers: { "Session-ID": getCookie('sid') } })
  },

  // body = {
  //   date: '',
  //   period: '',
  //   state: []
  // }
  editUserPlan(body) {
    return instance.put(`/calendar`, body, { headers: { "Session-ID": getCookie('sid') } })
  }
}


