//var window.plugins.childBrowser;

function onCloseBrowser() {
    console.log("onCloseBrowser!");
}

function locChanged(loc) {
    console.log("locChanged!");
}

function onOpenExternal() {
    alert("onOpenExternal!");
}

var onDeviceReady = function() {
    
    // Child Browser Events and initialization
   // window.plugins.childBrowser = childbrowser.install();
    
    $('#erSite').live("click",function(){
                      var siteURL = "http://www.exploreriverside.com";
                      
                      //window.plugins.childBrowser = window.plugins.childBrowser;
                      
                      if(window.plugins.childBrowser != null) {
                      
                      window.plugins.childBrowser.onLocationChange = function(loc){ root.locChanged(loc); };
                      window.plugins.childBrowser.onClose = function(){root.onCloseBrowser(); };
                      window.plugins.childBrowser.onOpenExternal = function(){root.onOpenExternal(); };
                      window.plugins.childBrowser.showWebPage(siteURL.replace(/ /g,"+"));
                      
                      }
                      });
    
    // Facebook Plugin Events and initialization 
    var facebookConnect = window.plugins.facebookConnect;
    
    facebookConnect.initWithAppId("436990936339840",function(result){});
/*
    facebookConnect.login({ permissions: ["publish_checkins", "publish_stream", "publish_actions"], appId: "436990936339840" }, function(result) {
                          console.log("FacebookConnect.login:" + JSON.stringify(result));
                          acctok = result.accessToken;
                          console.log("FacebookConnect.accessToken:" + acctok);
                          // Check for cancellation/error
                          if (result.cancelled || result.error) {
                          console.log("FacebookConnect.login:failedWithError:" + result.message);
                          return;
                          }
                          else {
                          
                          
                          console.log("1111111111111111111111111111111111111111111111111111");
                          
                          }
                          });
 */


    $('#fbpost').click(function(){
                       
                      /*
                       facebookConnect.login({ permissions: ["publish_checkins", "publish_stream", "publish_actions"], appId: "436990936339840" }, function(result) {
                                             console.log("FacebookConnect.login:" + JSON.stringify(result));
                                             acctok = result.accessToken;
                                             console.log("FacebookConnect.accessToken:" + acctok);
                                             // Check for cancellation/error
                                             if (result.cancelled || result.error) {
                                             console.log("FacebookConnect.login:failedWithError:" + result.message);
                                             return;
                                             }
                                             else {
                                             
                                             
                                             console.log("1111111111111111111111111111111111111111111111111111");
                                             
                                             }
                                             });
                       */
                       var dialogOptions = {
                       link: 'http://www.facebook.com/CityofRiverside',
                       picture: 'http://www.riversideca.gov/press/Brass-CA&I-bwn.jpg',
                       name: 'Explore Riverside',
                       caption: 'Riverside City, CA',
                       message: 'Explore the opportunities in Riverside Community',
                       description: '#1 Intelligent Community of the Year 2012'
                       
                       };
                       facebookConnect.dialog('feed', dialogOptions, function(response) {
                                              console.log("FacebookConnect.dialog:" + JSON.stringify(response));
                                              });
                       });

};

function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
}   

// Already existing (default scripts)

    var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
    };