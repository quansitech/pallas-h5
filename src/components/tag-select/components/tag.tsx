import React from 'react';

interface TagProps {
  title: string;
  text?: string;
  open?: boolean;
  field: string;
  clickFn: (value: string) => void;
}

const Tag: React.FC<TagProps> = ({
  text = '',
  open = false,
  title,
  field,
  clickFn,
}) => {
  return (
    <div className="tag-select">
      <div
        className={`tag-select-choose ${open ? 'active' : ''} ${
          text ? 'text-blue' : ''
        }`}
        onClick={() => {
          clickFn(field);
        }}
      >
        <div className={`tag-select-choose-name 'text-cut'`}>
          <span className="text-cut">{text || title}</span>
          <span className="triangles"></span>
        </div>
      </div>
    </div>
  );
};

export default Tag;
