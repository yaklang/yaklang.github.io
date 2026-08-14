import React, { type ReactNode } from "react";

// Figma 文档表格包装：保留横向滚动容器，不额外渲染设计稿中不存在的操作按钮。

type Props = React.ComponentProps<"table">;

export default function MDXTable(props: Props): ReactNode {
  const { className, ...rest } = props;

  return (
    <div className="yakdoc-table">
      <div className="yakdoc-table__scroll">
        <table {...rest} className={className} />
      </div>
    </div>
  );
}
