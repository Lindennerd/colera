import { message } from "antd";
import type { RcFile } from "antd/es/upload/interface";

export const useImageUpload = () => {
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = async (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      await message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      await message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  return {
    getBase64,
    beforeUpload,
  };
};
