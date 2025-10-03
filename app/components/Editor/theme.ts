/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default {
  code: "font-mono bg-gray-100 text-sm p-1 rounded",
  heading: {
    h1: "text-2xl font-bold mb-6",
    h2: "text-xl font-semibold mb-4",
    h3: "text-xl font-semibold mb-3",
    h4: "text-lg font-semibold mb-2",
    h5: "text-base font-semibold mb-1",
  },
  image: "max-w-full h-auto rounded-lg shadow",
  link: "text-blue-600 underline hover:text-blue-800",
  list: {
    listitem: "ml-6 list-disc",
    nested: {
      listitem: "ml-6 list-circle",
    },
    ol: "list-decimal ml-6 space-y-1",
    ul: "list-disc ml-6 space-y-1",
  },
  paragraph: "block mb-2 leading-relaxed text-gray-800",
  placeholder: "text-gray-400 italic",
  quote: "border-l border-primary/20 pl-4 italic mb-3",
  text: {
    bold: "font-bold",
    code: "font-mono bg-gray-100 text-sm px-1 py-0.5 rounded",
    hashtag: "text-blue-500 font-medium",
    italic: "italic",
    overflowed: "truncate",
    strikethrough: "line-through",
    underline: "underline",
    underlineStrikethrough: "underline line-through",
  },
};
