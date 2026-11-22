import {attachEaterSession} from './session.mjs';
const buildId = '6f025176cca9d717c6f1921ffb93132536719086';

let shellOrigin;
try { shellOrigin = new URL(document.referrer).origin; } catch {}
if (parent !== window && (
    /^https:\/\/(?:[a-z0-9-]+\.)?bt-vocabulary-platform-staging\.pages\.dev$/.test(shellOrigin))) {
  attachEaterSession({engine:window.BTEater, policy:{shellOrigin,engineOrigin:location.origin,buildId}});
}
