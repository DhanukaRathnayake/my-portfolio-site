import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";

// Import specific languages
import ts from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import yaml from "highlight.js/lib/languages/yaml";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";

// Create the lowlight instance
const lowlight = createLowlight();

// Register languages with lowlight
lowlight.register("typescript", ts);
lowlight.register("javascript", javascript);
lowlight.register("python", python);
lowlight.register("yaml", yaml);
lowlight.register("css", css);
lowlight.register("html", html);

// Pass the lowlight instance when initializing the extension
const CodeBlockExtension = CodeBlockLowlight.configure({ lowlight });

export default CodeBlockExtension;
