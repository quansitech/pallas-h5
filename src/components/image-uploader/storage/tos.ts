import Utils from '../utils';
import type { Storage } from './storage-type';

const tosStorage: Storage = {
  upload: async (file: File, action: string, hashId?: string) => {
    const formData = new FormData();

    let preUrl = new URLSearchParams(action);
    if (typeof hashId !== 'undefined' && hashId !== '') {
      preUrl.append('hash_id', hashId);
    }

    let fileType = file.type;
    if (!fileType) {
      fileType = await Utils.getFileType.start(file);
    }
    preUrl.append('vendor_type', 'volcengine_tos');
    preUrl.append('file_type', fileType);
    preUrl.append('title', file.name);

    const res = await fetch(decodeURIComponent(preUrl.toString()));
    const resData = await res.json();
    if (parseInt(resData.status) === 2) {
      return {
        file_id: resData.file_id,
        url: resData.file_url,
      };
    }

    const new_multipart_params = resData.params;

    for (let key in new_multipart_params) {
      if (!new_multipart_params.hasOwnProperty(key)) {
        continue;
      }
      formData.append(key, new_multipart_params[key]);
    }

    formData.append('file', file);

    const response = await fetch(resData['url'], {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    return data;
  },
};

export default tosStorage;
