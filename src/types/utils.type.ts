export interface ErrorResponseApiType<Data> {
  message: string
  data?: Data
}

export interface SuccessResponseApiType<Data> {
  message: string
  data: Data
}
