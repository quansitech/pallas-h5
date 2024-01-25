import init, { calc_file_hash } from '@quansitech/file-md5-wasm';
import type { ImageUploadItem } from 'antd-mobile';
import { ImageUploader as AntdImageUploader } from 'antd-mobile';
import React from 'react';
import './index.less';
import cosStorage from './storage/cos';
import ossStorage from './storage/oss';
import serverStorage from './storage/server';
import tosStorage from './storage/tos';

interface ImageUploaderProps {
  className?: string;
  value?: ImageUploadItem[];
  hashCheck?: boolean;
  action: string;
  uploadTo?: 'server' | 'oss' | 'cos' | 'tos';
  maxCount?: number;
  onChange?: ((items: ImageUploadItem[]) => void) | undefined;
}

interface StorageProps {
  file: File;
  action: string;
  hashId?: string;
}

const factoryStorage = (uploadTo: string) => {
  if (uploadTo === 'cos') {
    return cosStorage;
  }
  if (uploadTo === 'oss') {
    return ossStorage;
  }
  if (uploadTo === 'tos') {
    return tosStorage;
  }
  if (uploadTo === 'server') {
    return serverStorage;
  }
};

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  className = 'pallas-image-uploader',
  value = [],
  hashCheck = true,
  uploadTo = 'server',
  maxCount = 0,
  action,
  onChange,
}) => {
  const upload = async (file: File) => {
    const params: StorageProps = {
      file,
      action,
      hashId: '',
    };
    if (hashCheck) {
      await init();
      params.hashId = await calc_file_hash(file);
    }

    const storage = factoryStorage(uploadTo);

    const res = storage?.upload(params.file, params.action, params.hashId);

    return res;
  };

  const handleChange = (items: ImageUploadItem[]) => {
    if (typeof onChange === 'function') {
      onChange(items);
    }
  };

  return (
    <AntdImageUploader
      className={className}
      value={value}
      onChange={handleChange}
      upload={upload}
      multiple={true}
      maxCount={maxCount}
    />
  );
};
