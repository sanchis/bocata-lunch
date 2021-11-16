export class NotImplementedError extends Error {
  public readonly code: Number
  constructor () {
    super('Not implemented service')
    this.code = 501
  }
}
