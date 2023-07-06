const photoSorting = (gallery) => {
  let startPos = 0;
  const parts = [4, 5, 4];
  const newArr = [];

  parts.forEach((part, i) => {
    newArr.push({
      id: `line_${i}`,
      items: gallery.slice(startPos, startPos + part),
    });
    startPos += part;
  });
  return newArr;
};
export default photoSorting;
