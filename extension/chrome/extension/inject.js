chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(1, msg.javascriptCode);
  const elt = document.createElement('script');
  elt.innerHTML = msg.javascriptCode;
  document.head.appendChild(elt);

  const sty = document.createElement('style');
  sty.innerHTML = msg.cssCode;
  document.head.appendChild(sty);
  return true;
});
