namespace CommonTypes {
  // =========  Error  =========

  export interface Error {
    statusCode: number
    errorCode: string
    message: string[]
    error: string
  }
}

export default CommonTypes
