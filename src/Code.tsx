import { useEffect, useRef, useState } from 'react';

export function Code(props: { targetId: string }) {
  const [html, setHTML] = useState('');
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const dom = document.getElementById(props.targetId);
    if (dom) {
      setHTML(indentHTML(dom.innerHTML));
    }
  }, [props.targetId]);

  useEffect(() => {
    if (html && codeRef.current) {
      (window as any).hljs &&
        (window as any).hljs.highlightElement(codeRef.current);
    }
  }, [html]);
  return (
    <pre>
      <code className="language-html" ref={codeRef}>
        {html}
      </code>
    </pre>
  );
}

/**
 * <></>
 * <>文本<></><></></>
 * <><><></></>
 * 文本<>文本
 * </>
 * 1. 插入换行
 *    1. 开始标签结束。插入换行
 *    2. 闭合标签。在开始插入换行
 *    3. 文本，在开始插入换行。
 * 2. 插入空格（父元素栈长度）
 * @param html
 */
function indentHTML(html: string) {
  const tagStack: {
    name: string;
    starting: boolean;
    children: boolean;
    ending: boolean;
  }[] = [];
  let newHTML = '';
  for (let i = 0; i < html.length; i++) {
    const char = html[i];
    const tag = last(tagStack);

    if (char === '<') {
      const isEnding = html[i + 1] === '/';
      if (isEnding && tag) {
        // 闭合标签开始
        tag.ending = true;
        if (tag.children) {
          newHTML += `\n${spaces(tagStack.length - 1)}`;
        }
        newHTML += char;
      } else {
        // 开始标签开始
        if (tagStack.length) {
          newHTML += `\n${spaces(tagStack.length)}`;
        }
        if (tag) {
          tag.children = true;
        }
        const tagName = html
          .substring(i + 1, i + 11)
          .split(/[<>\s]/g)
          .filter(Boolean)[0];
        tagStack.push({
          name: tagName,
          starting: true,
          children: false,
          ending: false,
        });
        newHTML += char;
      }
      continue;
    }

    if (!tag) {
      newHTML += char;
      continue;
    }

    if (char === '>') {
      newHTML += char;
      // img 标签，没有用 /> 结尾
      const isAutoClose = html[i - 1] === '/' || ['img'].includes(tag.name);
      if (tag.ending || isAutoClose) {
        // 闭合标签结束
        tagStack.pop();
        tag.ending = false;
      }

      if (tag.starting) {
        // 开始标签结束
        tag.starting = false;
        if (html[i + 1] !== '<') {
          newHTML += `\n${spaces(tagStack.length)}`;
        }
      }

      continue;
    }

    if (!tag.starting && !tag.ending) {
      tag.children = true;
    }
    newHTML += char;
  }
  return newHTML.replace(/\s*style="[^"]+"\s*/g, ' ');
}

function last<T>(arr: T[]): T | undefined {
  return arr.length ? arr[arr.length - 1] : undefined;
}

function spaces(len: number) {
  return Array(len).fill('  ').join('');
}
