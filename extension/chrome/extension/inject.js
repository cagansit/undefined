chrome.runtime.onMessage.addListener((msg, sender, response) => {
  const elt = document.createElement('script');
  elt.innerHTML = `(function(minibar){
    minibar.campID = spApi.userSegments[698] || "Development";
    minibar.icons = [
  
          {
        text: "1001 Kitap",
        icon: "https://image.useinsider.com/dr/c793/dBURf03TWoCHr6B6N0G91526316985.png",
        href: "http://www.dr.com.tr/1001-kitap"
      },
  
          {
        text: "İmzalı Kitaplar",
        icon: "https://image.useinsider.com/dr/c793/zUjH1lHTQfjuJoDet8lS1526317024.png",
    href:"http://www.dr.com.tr/kataloglar_/ImzaliKitaplar2017/3167#/page=1/sort=soldcount,desc/categoryid=0/clog=3167/parentId=0/price=-1,-1"
      },
      
          {
        text: "Seçtiğimiz Kitaplar",
        icon: "https://image.useinsider.com/dr/c793/takydF3S89hZzP6aR0bI1526317059.png",
        href: "http://www.dr.com.tr/Sectiklerimiz/Kitap#/page=1/sort=newness,desc/categoryid=0/clog=18/parentId=0/price=-1,-1"
      },
      
      {
        text: "Plak&Pikap",
        icon: "https://image.useinsider.com/dr/c793/spJPTmNxiCKzFfEYnPod1526317086.png",
        href: "http://www.dr.com.tr/plak-ve-pikap"
      },
      
      {
        text: "Oyun Başlasın!",
        icon: "https://image.useinsider.com/dr/c793/SYqu8YQkO7HYs1ADaYmn1526317110.png",
        href: "http://www.dr.com.tr/oyun-kampanyalari"
      },
      
          {
        text: "Puzzle",
        icon: "https://image.useinsider.com/dr/c793/dlRCjxz92PMIbMMMLuPs1526317136.png",
        href: "http://www.dr.com.tr/kategori/Hobi-Oyuncak/Puzzlelar/grupno=00302"
      },
      
      {
        text: "Ofis Malzemeleri",
        icon: "https://image.useinsider.com/dr/c793/349VW1c9IwJEkUBsu0nS1526317163.png",
        href: "http://www.dr.com.tr/ofis-malzemeleri"
      },
      {
        text: "Kulaklık&Hoparlör",
        icon: "https://image.useinsider.com/dr/c793/iiTIS2Ol5r6QHxAeaYb21526317190.png",
        href: "http://www.dr.com.tr/kulaklik-speaker-kampanyasi"
      },
      
      {
        text: "Film Serileri",
        icon: "https://image.useinsider.com/dr/c793/VL6OrR7uGNOrw4Z3f7D71526317223.png",
        href: "http://www.dr.com.tr/film-serileri"
      },
      
    ];
  
    minibar.initialize = function(){
      minibar.refresh();
      minibar.createStructure();
    };
  
    minibar.createStructure = function(){
      var structure = "<div class='ins-Minibar'>" +
                        minibar.insertButtons() +
                      "</div>";
  
      sQuery("body").append(structure);
  
      setTimeout(function(){
        sQuery(".ins-Minibar").addClass("intro");
      },1000)
    };
  
    minibar.insertButtons = function(){
      var buttons = "";
  
      sQuery(minibar.icons).each(function(index,item){
        buttons += "<div class='ins-Button'>" +
                    "<a class='sp-custom-" + minibar.campID + "-" + index + "' href='" + item.href + "'></a>" +
                    "<div class='ins-ButtonImage'><img src='" + item.icon + "'></div>" +
                    "<div class='ins-ButtonText'>" + item.text + "</div>" +
                   "</div>";
      });
  
      return buttons;
    };
  
    minibar.refresh = function(){
      sQuery(".ins-Minibar").remove();
    };
  
    minibar.initialize();
  })({});
  `;
  document.head.appendChild(elt);

  const sty = document.createElement('style');
  sty.innerHTML = `.ins-Minibar {
    position: fixed;
    display: flex;
    bottom: 67px;
    flex-direction: column;
    box-sizing: border-box;
    transition: all .5s ease;
    transform: translateX(-100%);
  	z-index: 999999999;
}

.ins-Minibar.intro {
    transform: translateX(0%);
}

.ins-Minibar .ins-Button {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;
    background: #eeeeee;
    padding-right: 10px;
    max-width: 40px;
    transition: all .5s ease;
}

.ins-Minibar .ins-Button:first-child {
    border-radius: 0px 10px 0px 0px;
}

.ins-Minibar .ins-Button:last-child {
    border-radius: 0px 0px 10px 0px;
}

.ins-Minibar .ins-Button:hover {
    max-width: 500px;
}

.ins-Minibar .ins-ButtonText {
    display: inline-block;
    margin-left: 10px;
    white-space: nowrap;
}

.ins-Minibar .ins-ButtonImage {
    display: flex;
    align-items: center;
    min-width: 40px;
    height: 40px;
    justify-content: center;
}

.ins-Minibar a {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
}
`;
  document.head.appendChild(sty);
  return true;
});
