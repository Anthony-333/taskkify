import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64b0f1e734ee354def35",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
