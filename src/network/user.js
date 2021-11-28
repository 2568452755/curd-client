import { request } from "./request";
export function getUser() {
  return request({
    url: '/users'
  })
}
export function addUser(adduser) {
  return request({
    url: '/adduser',
    params: {
      adduser
    }
  })
}
export function delUser(delid) {
  return request({
    url: '/deluser',
    params: {
      delid
    }
  })
}
export function upUser(upuser) {
  return request({
    url: '/upuser',
    params: {
      upuser
    }
  })
}
