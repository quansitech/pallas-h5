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
              {
                id: '3',
                name: '历史',
              },
              {
                id: '4',
                name: '哲学',
              },
              {
                id: '5',
                name: '经济',
              },
              {
                id: '6',
                name: '管理',
              },
              {
                id: '7',
                name: '科技',
              },
              {
                id: '8',
                name: '计算机',
              },
              {
                id: '9',
                name: '医学',
              },
              {
                id: '10',
                name: '教育',
              },
              {
                id: '11',
                name: '法律',
              },
              {
                id: '12',
                name: '军事',
              },
              {
                id: '13',
                name: '政治',
              },
              {
                id: '14',
                name: '社会',
              },
              {
                id: '15',
                name: '文化',
              },
              {
                id: '16',
                name: '艺术',
              },
              {
                id: '17',
                name: '生活',
              },
              {
                id: '18',
                name: '体育',
              },
              {
                id: '19',
                name: '旅游',
              },
              {
                id: '20',
                name: '漫画',
              },
              {
                id: '21',
                name: '青春',
              },
              {
                id: '22',
                name: '言情',
              },
              {
                id: '23',
                name: '科幻',
              },
              {
                id: '24',
                name: '武侠',
              },
              {
                id: '25',
                name: '奇幻',
              },
              {
                id: '26',
                name: '悬疑',
              },
              {
                id: '27',
                name: '推理',
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
        ifMultiple={false}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};
