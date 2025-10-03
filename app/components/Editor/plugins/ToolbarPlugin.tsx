/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { $createHeadingNode } from "@lexical/rich-text";
import { $createParagraphNode } from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  TbAlignCenter,
  TbAlignJustified,
  TbAlignLeft,
  TbAlignRight,
  TbH1,
  TbH2,
  TbH3,
  TbBold,
  TbBoldOff,
  TbItalic,
  TbReload,
  TbRestore,
  TbStrikethrough,
  TbUnderline,
} from "react-icons/tb";

function Divider() {
  return <div className="divider border-r border-muted" />;
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [blockType, setBlockType] = useState<
    "paragraph" | "h1" | "h2" | "h3" | string
  >("paragraph");

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update inline formats
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));

      // Detect current block type
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const type = element.getType();

      if (type === "heading") {
        setBlockType((element as any).getTag()); // "h1", "h2", etc
      } else {
        setBlockType(type); // usually "paragraph"
      }
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor, $updateToolbar]);

  const toggleBlockType = (type: "paragraph" | "h1" | "h2" | "h3") => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        const element =
          anchorNode.getKey() === "root"
            ? anchorNode
            : anchorNode.getTopLevelElementOrThrow();

        if ($isElementNode(element)) {
          if (type === "paragraph") {
            const paragraphNode = $createParagraphNode();
            element.replace(paragraphNode).append(...element.getChildren());
          } else {
            const headingNode = $createHeadingNode(type);
            element.replace(headingNode).append(...element.getChildren());
          }
        }
      }
    });
  };

  return (
    <div className="toolbar flex gap-2 p-3" ref={toolbarRef}>
      {/* Undo / Redo */}
      <button
        type="button"
        disabled={!canUndo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        className="toolbar-item spaced"
        aria-label="Undo"
      >
        <TbRestore />
      </button>
      <button
        type="button"
        disabled={!canRedo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        className="toolbar-item"
        aria-label="Redo"
      >
        <TbReload />
      </button>
      <Divider />

      {/* H1 */}
      <button
        type="button"
        onClick={() => toggleBlockType(blockType === "h1" ? "paragraph" : "h1")}
        className={
          "toolbar-item spaced " + (blockType === "h1" ? "active" : "")
        }
        aria-label="Format Heading 1"
      >
        <TbH1 />
      </button>

      {/* H2 */}
      <button
        type="button"
        onClick={() => toggleBlockType(blockType === "h2" ? "paragraph" : "h2")}
        className={
          "toolbar-item spaced " + (blockType === "h2" ? "active" : "")
        }
        aria-label="Format Heading 2"
      >
        <TbH2 />
      </button>

      {/* H3 */}
      <button
        type="button"
        onClick={() => toggleBlockType(blockType === "h3" ? "paragraph" : "h3")}
        className={
          "toolbar-item spaced " + (blockType === "h3" ? "active" : "")
        }
        aria-label="Format Heading 3"
      >
        <TbH3 />
      </button>

      <Divider />

      {/* Inline formats */}
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        className={"toolbar-item spaced " + (isBold ? "active" : "")}
        aria-label="Format Bold"
      >
        {isBold ? <TbBoldOff /> : <TbBold />}
      </button>
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        className={"toolbar-item spaced " + (isItalic ? "active" : "")}
        aria-label="Format Italics"
      >
        <TbItalic />
      </button>
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        className={"toolbar-item spaced " + (isUnderline ? "active" : "")}
        aria-label="Format Underline"
      >
        <TbUnderline />
      </button>
      <button
        type="button"
        onClick={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
        }
        className={"toolbar-item spaced " + (isStrikethrough ? "active" : "")}
        aria-label="Format Strikethrough"
      >
        <TbStrikethrough />
      </button>
    </div>
  );
}
