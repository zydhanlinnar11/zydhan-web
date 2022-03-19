export default interface FileRepositoryInterface {
  delete: () => Promise<void>
  findById: (id: string) => Promise<File>
  save: (file: File) => Promise<File>
}
