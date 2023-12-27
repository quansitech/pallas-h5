/**
 * defaultShowCode: true
 */

import { QsSelect } from '@quansitech/pallas-h5';
import type { PickerValue } from '@quansitech/pallas-h5/qs-select/type';
import React, { useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setShow(true);
          console.log('????');
        }}
      >
        点击出现
      </div>
      <QsSelect
        columns={[
          { label: '周一', value: 'Mon' },
          { label: '周二', value: 'Tues' },
          { label: '周三', value: 'Wed' },
          { label: '周四', value: 'Thur' },
          { label: '周五', value: 'Fri' },
        ]}
        defaultValue={''}
        onChange={(val: PickerValue) => {
          console.log(val);
        }}
        isShow={show}
        showSearch
        onClose={() => {
          setShow(false);
        }}
      />
    </div>
  );
};
