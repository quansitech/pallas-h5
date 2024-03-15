import { ImageUploader } from '@quansitech/pallas-h5';
import React from 'react';
import {Form} from 'antd-mobile';

export default () => {
  return (
    <Form>
      <Form.Item name="image_uploader">
      <ImageUploader
        action="api/upload"
        uploadTo="cos"
        maxCount={5}
        onChange={(items) => {
          console.log(items);
        }}
      />
      </Form.Item>
    </Form> 
  );
};
