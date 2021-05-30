import axios from "axios";

const instance = axios.create({
  baseURL: 'http://46.101.160.28',
  withCredentials: true,
  headers: {
    "Content-Type": 'application/json',
    // "Cookie": 'sid=1622391366948sashatest'
  }
})

//решить вопрос с cookie

export const authorization = {
  login(login, password) {
    return instance.get(`/authorization/login/?login=${login}&password=${password}`)
  },

  logout() {
    return instance.get(`/authorization/logout`)
  },

  registration(login, password) {
    return instance.get(`/authorization/registration/?login=${login}&password=${password}`)
  }
}

export const cosmeticBag = {
  getBag() {
    return instance.get(`/cosmetic-bag`)
  },

  // body = {
  //   category: '',
  //   section: '',
  //   state: []
  // }
  editBag(body) {
    return instance.put(`/cosmetic-bag`, body)
  }
}

export const calendar = {
  getUserPlan(data) {
    return instance.get(`/calendar/?date=${data}`)
  },

  // body = {
  //   date: '',
  //   period: '',
  //   state: []
  // }
  editUserPlan(body) {
    return instance.put(`/calendar`, body)
  }
}


