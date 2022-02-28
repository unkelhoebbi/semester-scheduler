// copied from https://github.com/amendx/vue-dndrop/blob/99c224d2370f46211e86454db8156fdee57327b3/src/utils/container/utils.js#L223
// eslint-disable-next-line import/prefer-default-export
export const isMobile = () => {
  if (typeof window !== 'undefined') {
    if (window.navigator.userAgent.match(/Android/i)
      || window.navigator.userAgent.match(/webOS/i)
      || window.navigator.userAgent.match(/iPhone/i)
      || window.navigator.userAgent.match(/iPad/i)
      || window.navigator.userAgent.match(/iPod/i)
      || window.navigator.userAgent.match(/BlackBerry/i)
      || window.navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    }
    return false;
  }
  return false;
};
