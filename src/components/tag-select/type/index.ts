export type TagData = {
  id: string;
  name: string;
};

export type TagListData = {
  field: string;
  title: string;
  children: Array<TagData>;
};

export type ValueType = {
  [key: string]: Array<string>;
};

export type DefaultValueType = {
  [key: string]: string;
};

export type TagSelectProps = {
  classNameStr?: string;
  defaultValue: DefaultValueType;
  tagsList: Array<TagListData>;
  ifMultiple?: boolean;
  onChange: (value: DefaultValueType) => void;
};
