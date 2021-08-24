class HttpExceptionError extends Error {
  public constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = 'HttpRequestError';
  }
}

export default HttpExceptionError;