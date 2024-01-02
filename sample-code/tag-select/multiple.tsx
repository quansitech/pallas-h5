/**
 * defaultShowCode: true
 */

import { TagSelect } from '@quansitech/pallas-h5';
import { DefaultValueType } from '@quansitech/pallas-h5/tag-select/type';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<DefaultValueType>({});

  const handleChange = (params: DefaultValueType): void => {
    setValue(params);
    console.log('提交的数据', params);
  };

  return (
    <div>
      <TagSelect
        classNameStr="page-tag-select"
        tagsList={[
          {
            field: 'sort',
            title: '图书分类',
            children: [
              {
                id: '1',
                name: '小说',
              },
              {
                id: '2',
                name: '文学',
              },
            ],
          },
          {
            field: 'grace',
            title: '适读年级',
            children: [
              {
                id: '1',
                name: '小学',
              },
              {
                id: '2',
                name: '初中',
              },
              {
                id: '3',
                name: '高中',
              },
              {
                id: '4',
                name: '大学',
              },
            ],
          },
        ]}
        ifMultiple={true}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};
