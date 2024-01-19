import Utils from '../utils';
import type { Storage } from './storage-type';

const cosStorage: Storage = {
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
    preUrl.append('vendor_type', 'tengxun_cos');
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

    const new_multipart_params = {
      'Content-type': fileType,
      ...resData.params,
    };

    for (let key in new_multipart_params) {
      if (new_multipart_params.hasOwnProperty(key)) {
        formData.append(key, new_multipart_params[key]);
      }
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

export default cosStorage;
