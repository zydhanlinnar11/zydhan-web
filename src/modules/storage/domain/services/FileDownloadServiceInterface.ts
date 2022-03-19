export default interface FileDownloadServiceInterface {
  execute: (file: File) => Promise<Blob>
}
