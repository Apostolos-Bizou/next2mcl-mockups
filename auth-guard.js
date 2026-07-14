window.MCL_AUTH = {
  user: "Tolis",
  hash: "cbe159a333b9eb2d3f171053dd85f251b35581163c99ba6f9d3082832bb217cc"
};
(function () {
  if (window.__MCL_LOGIN__) return;
  try {
    if (localStorage.getItem("mcl_auth") !== window.MCL_AUTH.hash) location.replace("index.html");
  } catch (e) { location.replace("index.html"); }
})();