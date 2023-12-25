/**
 * defaultShowCode: true
 */

import { DefaultValueType, TagSelect } from '@quansitech/pallas-h5';
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
        className="page-tag-select"
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
        ]}
        ifMultiple={false}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};
