const CLIENT_ID = process.env.CLIENT_ID || "{clientId}";
const ISSUER = process.env.ISSUER || "https://{yourOktaDomain}/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/login/callback`;
const STEPUP_LEVEL = process.env.STEPUP_LEVEL || "urn:okta:loa:1fa:any";
const STEPUP_AGE = process.env.STEPUP_AGE || 30;
const HUB = process.env.HUB;
const SPOKE01 = process.env.SPOKE01;
const SPOKE02 = process.env.SPOKE02;
const usStore = process.env.US_STORE;
const frStore = process.env.FR_STORE;
const jpStore = process.env.JP_STORE;

// eslint-disable-next-line
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    stepup_level: STEPUP_LEVEL,
    stepup_age: STEPUP_AGE,
    tokenManager: {
      storage: "sessionStorage",
    },
  },
  resourceServer: {
    messagesUrl: "http://localhost:8000/api/messages",
  },
  dr: {
    hub: HUB,
    spoke01: SPOKE01,
    spoke02: SPOKE02,
    usStore,
    frStore,
    jpStore,
  },
};
