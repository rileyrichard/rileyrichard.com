import { CodeBlock, tomorrowNight } from "react-code-blocks";

function CodeBlocks({
  code,
  language,
  showLineNumbers,
}: {
  code: string;
  language: string;
  showLineNumbers: boolean;
}) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={tomorrowNight}
    />
  );
}

export default CodeBlocks;
