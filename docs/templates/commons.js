import React from "react";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import CodeBlock from "@theme/CodeBlock";
import {
  clientTabGroupId,
  syncClientLabel,
  asyncClientLabel,
} from "../java/commons";

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
