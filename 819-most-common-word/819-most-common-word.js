/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => Object.entries(paragraph.toLowerCase().replaceAll(/[^a-zA-Z ]/g, ` `).split(/\s+/).filter(w => w).reduce((c, w) => (c[w] = (c[w] ?? 0) + 1, c), {})).sort(([, f1], [, f2]) => f2 - f1).find(([w,]) => !banned.includes(w))[0];