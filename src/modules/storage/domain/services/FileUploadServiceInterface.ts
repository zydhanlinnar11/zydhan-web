export default interface FileUploadServiceInterface {
  execute: (file: File, data: Blob) => Promise<void>
}
