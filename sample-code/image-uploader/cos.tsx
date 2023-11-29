import { ImageUploader } from '@quansitech/pallas-h5';
import React from 'react';

export default () => {
  return (
    <ImageUploader
      action="https://raw.githubusercontent.com/quansitech/pallas-h5/master/mock/upload.json?cate=image"
      uploadTo="cos"
    />
  );
};
