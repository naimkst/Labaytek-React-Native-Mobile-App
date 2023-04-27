export const getPrice = (id: any) => {
  // const regex = /(&#\d+;)/;
  const regex = /&#\d+;/g;
  if (id) {
    const match = id.match(regex);
    return String.fromCharCode(match[0].replace(/&#|;/g, ''));
  }
  return '';
};
