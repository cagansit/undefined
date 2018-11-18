export const JAVASCRIPT = `(function(minibar){
    minibar.campID = spApi.userSegments[#{{BuilderId|Text}}] || "Development";
    minibar.icons = [
        {
            text: "#{{Text 1|Text}}",
            icon: "#{{Image 1|Text}}",
            href: "#{{Url 1|Text}}"
        },
        {
            text: "#{{Text 2|Text}}",
            icon: "#{{Image 2|Text}}",
            href: "#{{Url 2|Text}}"
        },
        {
            text: "#{{Text 3|Text}}",
            icon: "#{{Image 3|Text}}",
            href: "#{{Url 3|Text}}"
        },
        {
            text: "#{{Text 4|Text}}",
            icon: "#{{Image 4|Text}}",
            href: "#{{Url 4|Text}}"
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
})({});`;

export const CSS = `.ins-Minibar {
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
    background: #{{Button Color|Text}};
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
}`;
