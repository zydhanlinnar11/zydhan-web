export default interface FileFactoryInterface {
  create: (name: string, data: Blob, description?: string) => Promise<File>
}
