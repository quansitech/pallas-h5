---
nav: 组件
order: 1
---

# select 选择组件带有搜索功能

## 参数

| 属性         | 说明                       | 类型                    | 默认值 |
| ------------ | -------------------------- | ----------------------- | ------ |
| className    | 容器类名                   | string                  | -      |
| isShow       | 是否展示                   | boolean                 | -      |
| columns      | 数据                       | PickerColumnItem        | -      |
| defaultValue | 默认值                     | string                  | -      |
| showSearch   | 是否开启搜索               | boolean                 | false  |
| onChange     | 点击弹窗中的确定按钮时触发 | (value: string) => void | -      |
| onClose      | 关闭事件                   | () => void              | -      |

### 属性类型

```
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
```

<code src="../../sample-code/qs-select/index.tsx" >带有搜索的选择组件</code>
