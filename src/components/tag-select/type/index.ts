export interface TagData {
  id: string;
  name: string;
}

export interface TagListData {
  field: string;
  title: string;
  children: Array<TagData>;
}

export interface ValueType {
  [key: string]: Array<string>;
}

export interface DefaultValueType {
  [key: string]: string;
}

export interface TagSelectProps {
  classNameStr?: string;
  defaultValue: DefaultValueType;
  tagsList: Array<TagListData>;
  ifMultiple?: boolean;
  onChange: (value: DefaultValueType) => void;
}
