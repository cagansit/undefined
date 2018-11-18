import * as Dummy from '../../app/helpers/dummyCodes';

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  const elt = document.createElement('script');
  elt.innerHTML = Dummy.JAVASCRIPT;
  document.head.appendChild(elt);

  const sty = document.createElement('style');
  sty.innerHTML = Dummy.CSS;
  document.head.appendChild(sty);
  return true;
});
