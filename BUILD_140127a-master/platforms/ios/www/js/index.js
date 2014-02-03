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

function facebookWallPost() {
    //alert('Debug 1');
    
    var params = {
    method: 'feed',
    name: 'Facebook Dialogs',
    link: 'https://developers.facebook.com/docs/reference/dialogs/',
    picture: 'http://fbrell.com/f8.jpg',
    caption: 'Reference Documentation',
    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    };
    var params2 = {
    method: 'feed',
    link: 'http://www.facebook.com/CityofRiverside',
    picture: 'http://www.exploreriverside.com/images/logo-cityofriverside.png',
    name: 'Explore Riverside',
    caption: 'Riverside City, CA',
        //message: 'Explore the opportunities in Riverside Community',
    description: '#1 Intelligent Community of the Year 2012'
        
    };
    console.log(params);
    FB.ui(params2, function(obj) { console.log(obj);});
    //FB.api('/me/feed','post', params2,function(obj) { console.log(obj);});
}

var onDeviceReady = function() {
    //alert("a");
    FB.init({ appId: "436990936339840", nativeInterface: CDV.FB, useCachedDialogs: false });
    // Child Browser Events and initialization
   // window.plugins.childBrowser = childbrowser.install();
    
    $('#erSite').click(function(){
                      var siteURL = "http://www.exploreriverside.com";
                      var ref = window.open(siteURL,'_blank','location=yes');
                      //window.plugins.childBrowser = window.plugins.childBrowser;
                      
                      
                      });
    
    // Facebook Plugin Events and initialization 
   // var facebookConnect = window.plugins.facebookConnect;
    
    //facebookConnect.initWithAppId("436990936339840",function(result){});
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


    $('#fbpost2').click(function(){
                       
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
                       
                      // alert("ssss");
                       var params = {
                       method: 'feed',
                       name: 'Facebook Dialogs',
                       link: 'https://developers.facebook.com/docs/reference/dialogs/',
                       picture: 'http://fbrell.com/f8.jpg',
                       caption: 'Reference Documentation',
                       description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
                       };
                       var params2 = {
                       method: 'feed',
                       link: 'http://www.facebook.com/CityofRiverside',
                       picture: 'http://www.riversideca.gov/press/Brass-CA&I-bwn.jpg',
                       name: 'Explore Riverside',
                       caption: 'Riverside City, CA',
                       //message: 'Explore the opportunities in Riverside Community',
                       description: '#1 Intelligent Community of the Year 2012'
                       
                       };
                       console.log(params);
                       FB.ui(params2, function(obj) { console.log(obj);});
                       //FB.api('/me/feed','post', params2,function(obj) { console.log(obj);});
                       
                       
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