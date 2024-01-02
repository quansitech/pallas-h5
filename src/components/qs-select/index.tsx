import { Input, PickerView, Popup } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import type { PickerColumnItem, PickerValue, QsSelectPropsType } from './type';

import './index.less';

export const QsSelect: React.FC<QsSelectPropsType> = ({
  className = '',
  columns,
  defaultValue,
  isShow,
  showSearch = false,
  onChange,
  onClose,
}) => {
  const [seachValue, setSeachValue] = useState('');
  const [value, setValue] = useState<PickerValue>(defaultValue);

  const handleConfirm = () => {
    onChange(value);
    onClose();
  };

  const handleCancel = () => {
    setSeachValue('');
    setValue(defaultValue);
    onClose();
  };

  const handleInputChange = (val: string) => {
    setSeachValue(val);
  };

  const handlePickerChange = (val: PickerValue[]) => {
    if (value === val[0]) return;
    setValue(val[0]);
  };

  const columnsFilter = () => {
    let newCloneColumns: PickerColumnItem[] = JSON.parse(
      JSON.stringify(columns),
    );
    if (seachValue) {
      const exp = new RegExp(seachValue, 'g');
      newCloneColumns = newCloneColumns.filter((item) => exp.test(item.label));
    }
    return newCloneColumns;
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div>
      <Popup
        className={`qs-select-component ${className}`}
        visible={isShow}
        onMaskClick={handleCancel}
      >
        <div className="top-btn">
          <div className="btn btn-cancle" onClick={handleCancel}>
            取消
          </div>
          <div className="btn btn-confirm" onClick={handleConfirm}>
            确定
          </div>
        </div>
        {showSearch && (
          <div className="input-box">
            <Input
              placeholder="请输入搜索内容"
              value={seachValue}
              onChange={handleInputChange}
            />
          </div>
        )}
        <PickerView
          columns={[columnsFilter()]}
          value={[value]}
          onChange={handlePickerChange}
        />
      </Popup>
    </div>
  );
};
