const getCount = (str) => {
  return (str.match(/[aeiou]/gi) || []).length;
};
