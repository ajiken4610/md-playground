import { Marked } from "marked";
import { default as createDomPurify } from "dompurify";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);
const sanitize = createDomPurify().sanitize;
export default (dirtyMD: string) => sanitize(marked.parse(dirtyMD));
