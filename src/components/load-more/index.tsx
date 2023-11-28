import React, { useEffect, useRef } from "react";
import { SpinLoading } from 'antd-mobile'
import { useInViewport } from 'ahooks';

import "./index.less";

interface LoadMoreProps {
  onLoadMore: () => Promise<void>;
  end: boolean;
  className?: string;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore, end = false, className="pallas-load-more" }) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(innerRef);

  useEffect(() => {
    if (!end && inViewport) {
      triggerLoadMore();
    }
  });

  const triggerLoadMore = async () => {
      await onLoadMore();
  }

  return (
    <div className={className} ref={innerRef}>
      {!end && <div className="load-more-loading"><SpinLoading /><span className="loading-tips">加载中...</span></div>}
      {end && <div className="load-more-finished">已经到底了</div>}
    </div>
  );
}

