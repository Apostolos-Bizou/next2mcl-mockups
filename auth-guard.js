/* Next2MCL — demo access gate (client-side).
   NOTE: this is a soft gate for the public demo. It keeps casual visitors out,
   but it is NOT real security (source is viewable). For true protection use a
   hosting-level gate (e.g. Cloudflare Access) in front of the domain.

   To change credentials: set `user` and `hash` below.
   `hash` = SHA-256 hex of the password. Generate with, e.g.:
     PowerShell:  [BitConverter]::ToString((New-Object Security.Cryptography.SHA256Managed).ComputeHash([Text.Encoding]::UTF8.GetBytes("YOURPASS"))) -replace '-','' | % ToLower
*/
window.MCL_AUTH = {
  user: "Tolis",
  hash: "cbe159a333b9eb2d3f171053dd85f251b35581163c99ba6f9d3082832bb217cc"
};

/* Guard: on any protected page, redirect to the login if not signed in.
   The login page sets window.__MCL_LOGIN__=true before loading this file,
   so the guard is skipped there. */
(function () {
  if (window.__MCL_LOGIN__) return;
  try {
    if (localStorage.getItem("mcl_auth") !== window.MCL_AUTH.hash) {
      location.replace("index.html");
    }
  } catch (e) {
    location.replace("index.html");
  }
})();
