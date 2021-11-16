export class UpdateElementNotFound extends Error {
  public readonly code: Number
  public readonly name: string

  constructor () {
    const message = 'Update element not found'
    super(message)
    this.name = message
    this.code = 404
  }
}
