import {attachEaterSession} from './session.mjs';
const buildId = '1c1511e562738b824497440cbb505f6df927fcc5';

let shellOrigin;
try { shellOrigin = new URL(document.referrer).origin; } catch {}
if (parent !== window && (
    /^https:\/\/(?:[a-z0-9-]+\.)?bt-vocabulary-platform-staging\.pages\.dev$/.test(shellOrigin))) {
  attachEaterSession({engine:window.BTEater, policy:{shellOrigin,engineOrigin:location.origin,buildId}});
}
