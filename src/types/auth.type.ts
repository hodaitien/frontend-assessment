export interface LoginPayloadType {
  username: string
  password: string
}

export interface LoginResponseType {
  accessToken: string
}

export interface UserType {
  username: string
  email: string
  firstName: string
  lastName: string
}
