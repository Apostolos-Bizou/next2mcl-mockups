/* Next2MCL — demo access gate (client-side).
   NOTE: this is a soft gate for the public demo. It keeps casual visitors out,
   but it is NOT real security (source is viewable). For true protection use a
   hosting-level gate (e.g. Cloudflare Access) in front of the domain.

   To change credentials: set `user` and `hash` below.
   `hash` = SHA-256 hex of the password. Generate with, e.g.:
     PowerShell:  [BitConverter]::ToString((New-Object Security.Cryptography.SHA256Managed).ComputeHash([Text.Encoding]::UTF8.GetBytes("YOURPASS"))) -replace '-','' | % ToLower
*/
window.MCL_AUTH = {
  user: "crossworld",
  hash: "cff890909bb161bf2502f880af3431a425ffeb71de8dcb89acc7e8841d2a6acf"
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
