export const getJwt = () => {
  const jwt = sessionStorage.getItem("token");
  if (jwt) {
    return jwt;
  } else {
    return false;
  }
};
