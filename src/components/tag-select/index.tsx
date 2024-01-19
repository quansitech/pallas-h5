import React, { useEffect, useState } from 'react';
import type {
  DefaultValueType,
  TagData,
  TagSelectProps,
  ValueType,
} from './type';

import Tag from './components/tag';

import './index.less';

const remove = (arr: Array<string>, str: string) => {
  let index = arr.indexOf(str);
  let newArr: Array<string> = [];
  if (index !== -1 && index !== 0) {
    newArr = arr.slice(0, index);
    newArr.push(...arr.slice(index + 1, arr.length));
  } else if (index !== -1 && index === 0) {
    arr.shift();
    newArr = [...arr];
  } else {
    newArr = [...arr];
  }
  return newArr;
};

export const TagSelect: React.FC<TagSelectProps> = ({
  tagsList = [],
  onChange = () => {},
  defaultValue,
  classNameStr = '',
  ifMultiple = false,
}) => {
  const [value, setValue] = useState<ValueType>({});
  const [tagActive, setTagActive] = useState<string>(''); // 存的是field
  const [activeTagItemChildren, setActiveTagItemChildren] = useState<TagData[]>(
    [],
  ); //存的是当前活跃的tag的children
  const [valueText, setValueText] = useState<DefaultValueType>({});

  const initValueText = (ids: Array<string>, dataList: Array<TagData>) => {
    let str: Array<string> = [];
    ids.forEach((id: string): void => {
      dataList.forEach((childrenItem): void => {
        if (childrenItem.id === id) {
          str.push(childrenItem.name);
        }
      });
    });
    return str.join(',');
  };

  // 初始化
  const initChooseValue = () => {
    let obj: ValueType = {};
    let objText: DefaultValueType = {};
    tagsList.forEach((item): void => {
      obj[item.field] = defaultValue[item.field]
        ? defaultValue[item.field].split(',')
        : [];
      objText[item.field] = initValueText(obj[item.field], item.children);
      return;
    });
    setValue(obj);
    setValueText(objText);
  };

  useEffect(() => {
    initChooseValue();
  }, [defaultValue]);

  const tagClick = (field: string): void => {
    if (tagActive === field) {
      setTagActive('');
      setActiveTagItemChildren([]);
      return;
    }
    initChooseValue();
    setTagActive(field);
    for (let i = 0; i < tagsList.length; i++) {
      let item = tagsList[i];
      if (item.field === field) {
        setActiveTagItemChildren(item.children);
        break;
      }
    }
  };

  /* 关闭弹窗 */
  const closePopup = () => {
    setTagActive('');
    initChooseValue();
  };

  /* 确定按钮点击事件 */
  const handleClickToSearch = () => {
    setTagActive('');
    setActiveTagItemChildren([]);
    let obj: DefaultValueType = {};
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        obj[key] = value[key].join(',');
      }
    }
    onChange(obj);
  };

  const handleSort = (id: string) => {
    let arr: Array<string> = [...value[tagActive]];
    if (arr.includes(id)) {
      arr = remove(arr, id);
    } else {
      if (ifMultiple) {
        arr.push(id);
      } else {
        arr = [id];
      }
    }
    setValue((pre) => {
      let obj: ValueType = { ...pre };
      obj[tagActive] = arr;
      return obj;
    });
  };

  // 重置
  const handleReset = () => {
    setValue((pre) => {
      let obj: ValueType = { ...pre };
      obj[tagActive] = [];
      return obj;
    });
  };

  return (
    <div className={`tag-select-component ${classNameStr}`}>
      <div className="swiper">
        {tagsList.map((item) => {
          return (
            <div
              key={item.field}
              className={`swiper-slide ${tagActive !== '' ? 'show-mask' : ''}`}
            >
              <Tag
                title={item.title}
                text={tagActive !== item.field ? valueText[item.field] : ''}
                field={item.field}
                clickFn={tagClick}
                open={tagActive === item.field ? true : false}
              />
            </div>
          );
        })}
      </div>
      {
        <div className={`custom-popup ${tagActive !== '' ? 'active' : ''}`}>
          <div className="white-bg">
            <div className="content-list">
              {activeTagItemChildren.map((item) => {
                return (
                  <div
                    className={`content-item ${
                      tagActive && value[tagActive].includes(item.id)
                        ? 'active'
                        : ''
                    }`}
                    key={item.id}
                    onClick={() => {
                      handleSort(item.id);
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
            <div className="btns">
              <div className="btn" onClick={handleReset}>
                重置
              </div>
              <div className="btn" onClick={handleClickToSearch}>
                确认
              </div>
            </div>
          </div>
        </div>
      }
      <div
        className={`tag-select-mask ${tagActive !== '' ? 'active' : ''}`}
        onClick={closePopup}
      ></div>
    </div>
  );
};
