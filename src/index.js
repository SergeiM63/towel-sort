module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return [];

  return matrix.reduce((acc, current, index) => {
    current = index%2 === 0 ? current : current.reverse();
    return [...acc, ...current];
  }, []);
}
