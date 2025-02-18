import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { Heading } from "@tiptap/extension-heading";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Image from "@tiptap/extension-image";
import CodeBlockExtension from "./codeblock";
import Link from "@tiptap/extension-link";

const extensions = [
  Placeholder.configure({
    placeholder: "Write something …",
    emptyEditorClass: "is-editor-empty",
  }),

  TextStyle,

  // Enable color for text and list items
  Color.configure({
    types: [TextStyle.name, ListItem.name],
  }),

  // Starter Kit with configurations for lists
  StarterKit.configure({
    bulletList: false,
    orderedList: false,
    listItem: false,
    codeBlock: false,
  }),
  BulletList.configure({
    keepMarks: true,
    keepAttributes: false,
  }),
  OrderedList.configure({
    keepMarks: true,
    keepAttributes: false,
  }),
  ListItem,
  CodeBlockExtension,

  // Enable underline
  Underline,

  // Enable image handling with custom attributes
  Image.configure({
    HTMLAttributes: {
      class: "custom-editor-image",
    },
  }),

  // Enable text alignment for headings and paragraphs
  TextAlign.configure({ types: ["heading", "paragraph"] }),

  // Add Heading extension
  Heading.configure({
    levels: [1, 2], // Allow H1 and H2 headers
  }),

  // Enable Link extension with anchor support
  Link.configure({
    protocols: ["http", "https", "mailto", "tel"],
    autolink: true,
    linkOnPaste: true,
    openOnClick: false,
    HTMLAttributes: {
      class: "custom-link",
    },
    validate: (href) => /^https?:\/\//.test(href) || href.startsWith("#"), // Allow anchor links
  }),
];

export default extensions;
