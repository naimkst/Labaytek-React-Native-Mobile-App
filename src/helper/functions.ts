export const getPrice = (id: any) => {
  // const regex = /(&#\d+;)/;
  const regex = /&#\d+;/g;
  const match = id.match(regex);
  console.log(match[0]);
  return String.fromCharCode(match[0].replace(/&#|;/g, ''));
};
