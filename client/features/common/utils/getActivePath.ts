export const getActivePath = (pathname: string) => {
  return pathname.replace(/^\/(ka|en)/, '') || '/';
};
