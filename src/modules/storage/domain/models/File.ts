export default class File {
  constructor(
    private id: string,
    private userId: string,
    private name: string,
    private description?: string
  ) {
    if (this.name.split('.').length < 2) throw Error('file_extension_required')
  }

  public getId = () => this.id
  public getUserId = () => this.userId
  public getName = () => this.name
  public getDescription = () => this.description

  public changeName = (name: string) => {
    this.name = name
  }

  public changeDescription = (description: string) => {
    this.description = description
  }
}
