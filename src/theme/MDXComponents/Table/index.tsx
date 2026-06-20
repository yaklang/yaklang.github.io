import React, { useState, type ReactNode } from "react";
import clsx from "clsx";

// 文档表格交互包装：
// - 默认折叠(紧凑、单行不换行；宽表横向滚动)。
// - 鼠标移到表格上时，右上角出现“展开”按钮(仅显示按钮，不改变表格布局，避免 hover 跳动)。
// - 点击“展开”后整表占满宽度并换行展示，右侧列无需滚动即可一览；点击“恢复”回到折叠态。
// - 展开/恢复完全由用户点击控制，不随鼠标移动自动变化。
// 关键词: 表格展开按钮, 折叠表格, 宽表换行, MDX table 包装

type Props = React.ComponentProps<"table">;

export default function MDXTable(props: Props): ReactNode {
  const [expanded, setExpanded] = useState(false);
  const { className, ...rest } = props;

  return (
    <div className={clsx("yakdoc-table", expanded && "yakdoc-table--expanded")}>
      <button
        type="button"
        className="yakdoc-table__toggle"
        aria-expanded={expanded}
        aria-label={expanded ? "恢复表格" : "展开表格"}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "恢复" : "展开"}
      </button>
      <div className="yakdoc-table__scroll">
        <table {...rest} className={className} />
      </div>
    </div>
  );
}
