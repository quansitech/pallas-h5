import React from "react";
import { ImageUploader as AntdImageUploader } from "antd-mobile";
import init, {calc_file_hash} from '@quansitech/file-md5-wasm';
import type { ImageUploadItem } from "antd-mobile";
import "./index.less";

interface ImageUploaderProps {
  className?: string;
  value?: ImageUploadItem[];
  hashCheck?: boolean;
  action: string;
  uploadTo?: 'server' | 'oss' | 'cos' | 'tos';
  onChange?: ((items: ImageUploadItem[]) => void) | undefined;
}

interface StorageProps {
  file: File,
  action: string,
  hashId?: string
}

const factoryStorage = async (uploadTo: string) => {
  const storage =  await import(`./storage/${uploadTo}`);
  return storage.default;
}


export const ImageUploader: React.FC<ImageUploaderProps> = ({
    className="pallas-image-uploader", 
    value = [], 
    hashCheck=true, 
    uploadTo="server",
    action, 
    onChange}) => {

    const upload = async (file: File) => {
        const params: StorageProps = {
          file,
          action,
          hashId: ''
        };
        if(hashCheck){
          await init();
          params.hashId = await calc_file_hash(file);
        }

        const storage = await factoryStorage(uploadTo);

        const res = await storage.upload(params.file, params.action, params.hashId);
        
        return res;
        
    }

    const handleChange = (items: ImageUploadItem[]) => {
      onChange && onChange(items);
    }


    return <AntdImageUploader className={className}
          value={value}
          onChange={handleChange} 
          upload={upload}
          multiple={true}
    />
    
}

