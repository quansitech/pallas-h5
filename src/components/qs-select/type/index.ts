import { PickerValue as AntdPickerValue } from 'antd-mobile/es/components/picker-view';

export type PickerValue = AntdPickerValue;
export type PickerColumnItem = {
  label: string;
  value: string;
  key?: string | number;
};
export type QsSelectPropsType = {
  className?: string;
  isShow: boolean;
  columns: PickerColumnItem[];
  defaultValue: string;
  showSearch?: boolean;
  onChange: (value: PickerValue) => void;
  onClose: () => void;
};
