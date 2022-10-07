import React from "react";
import Admonition from "@theme/Admonition";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import CodeBlock from "@theme/CodeBlock";
import {
  clientTabGroupId,
  syncClientLabel,
  asyncClientLabel,
} from "../java/commons";
import { cursorOps, cursorDocLink } from "../typescript/commons";

// eslint-disable-next-line react/prop-types
export function AsyncCodeBlock({ codeLang, defaultExample, asyncExample }) {
  if (codeLang === "java") {
    return (
      <Tabs groupId={clientTabGroupId}>
        <TabItem value={syncClientLabel} label={syncClientLabel}>
          <CodeBlock language={codeLang}>{defaultExample}</CodeBlock>
        </TabItem>
        <TabItem value={asyncClientLabel} label={asyncClientLabel}>
          <CodeBlock language={codeLang}>{asyncExample}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  } else {
    return <CodeBlock language={codeLang}>{defaultExample}</CodeBlock>;
  }
}

// eslint-disable-next-line react/prop-types
export function CursorFundamentalsBox({ codeLang }) {
  if (codeLang === "typescript") {
    return (
      <div>
        <Admonition type="info">
          <p>
            <b>{cursorOps}</b> operation returns a Cursor that provides access
            to data. <a href={cursorDocLink}>Cursor fundamentals section</a>{" "}
            explains in detail the different ways to retrieve data from Cursor.
          </p>
        </Admonition>
      </div>
    );
  } else {
    return "";
  }
}
