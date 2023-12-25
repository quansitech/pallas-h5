---
nav: 组件
order: 1
---

# 标签筛选

## 参数

| 属性         | 说明                       | 类型                              | 默认值 |
| ------------ | -------------------------- | --------------------------------- | ------ |
| classNameStr | 额外加在这个组件上面的类名 | string                            | -      |
| defaultValue | 默认选中项                 | DefaultValueType                  | -      |
| tagsList     | 数据                       | TagListData[]                     | -      |
| ifMultiple   | 是否多选                   | boolean                           | false  |
| onChange     | 点击弹窗中的确定按钮时触发 | (value: DefaultValueType) => void | -      |

### 属性类型

```
interface DefaultValueType {
    [key: string]: string;
}

interface TagListData {
    field: string;
    title: string;
    children: Array<TagData>;
}
```

<code src="../../sample-code/tag-select/index.tsx" description="ifMultiple 为false">单选</code>

<code src="../../sample-code/tag-select/multiple.tsx" description="ifMultiple true">多选</code>
