const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

const bucketName = "bikeconnect_bikes";

export async function getImages(bikeId: string) {
  const [files] = await storage.bucket(bucketName).getFiles();
  console.log("files returned");
  console.log(files);
  return files;
}

getImages("abc").then((resp) => console.log(resp));
