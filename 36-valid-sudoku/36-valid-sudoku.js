/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowsValid = board.every(isValidRow);
  const colsValid = board
    .reduce((acc, row) => {
      row.forEach((e, i) => (acc[i] ? acc[i].push(e) : (acc[i] = [e])));
      return acc;
    }, [])
    .every(isValidRow);
  const threeCols = board.reduce((acc, row) => {
    for (let i = 0; i < 3; i++)
      acc[i] ? acc[i].push(row.splice(0, 3)) : (acc[i] = [row.splice(0, 3)]);
    return acc;
  }, []);

  for (let i = 0; i < threeCols.length; i++) {
    while (threeCols[i].length !== 0)
      if (!isValidRow([].concat(...threeCols[i].splice(0, 3)))) return false;
  }

  return rowsValid && colsValid;
};

const isValidRow = (row) =>
  Object.values(
    row.reduce((a, n) => {
      if (n !== ".") a[n] = (a[n] ?? 0) + 1;
      return a;
    }, {})
  ).every((val) => val < 2);