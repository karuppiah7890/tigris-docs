/* eslint-disable react/prop-types */
import React from "react";
import Admonition from "@theme/Admonition";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import CodeBlock from "@theme/CodeBlock";
import {
  asyncClientLabel,
  clientTabGroupId,
  syncClientLabel,
} from "../java/database/commons";
import {
  cursorDocLink,
  cursorOps,
  dataModelTabGroupId,
  decoratorModelLabel,
  interfaceModelLabel,
} from "../typescript/commons";

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

// helper to create tabbed group of decorator and interface based schemas in TS
export function DataModels({ codeLang, decoratorExample, interfaceExample }) {
  return (
    <Tabs groupId={dataModelTabGroupId}>
      <TabItem value={decoratorModelLabel} label={decoratorModelLabel}>
        <CodeBlock language={codeLang}>{decoratorExample}</CodeBlock>
      </TabItem>
      <TabItem value={interfaceModelLabel} label={interfaceModelLabel}>
        <CodeBlock language={codeLang}>{interfaceExample}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}

export function TSDataModels({ decoratorExample, interfaceExample }) {
  return DataModels({
    codeLang: "typescript",
    decoratorExample: decoratorExample,
    interfaceExample: interfaceExample,
  });
}
