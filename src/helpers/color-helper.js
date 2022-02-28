const CATEGORY_COLOR_MAP = {
  Auf: '#f368e0',
  MaPh: '#ee5253',
  KomEng: '#0abde3',
  gwr: '#10ac84',
  Inf: '#576574',
  SaBa: '#222f3e',
  EP: '#55efc4',
  RA: '#ff9f43',
};

const getColorForCategory = (categoryId) => CATEGORY_COLOR_MAP[categoryId];

export {
  getColorForCategory,
  CATEGORY_COLOR_MAP,
};
