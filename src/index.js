module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return [];
  return matrix.map(item => {
  	item.toString()
  		.replace("[", "")
    	.replace("]", "");
  });
}
