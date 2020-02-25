#!/usr/bin/env node

// Problem Description ->> https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc")); // 9
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba")); // 28

function designerPdfViewer(h, word) {
  const chars = [];
  for (let i = 0; i < word.length; i++) {
    const charPosition = word.charCodeAt(i) - 97;
    chars.push(h[charPosition]);
  }

  return Math.max(...chars) * chars.length;
}
