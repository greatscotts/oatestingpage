(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt)
    {

intel.xdk.device.showRemoteSiteExt("http://www.google.com/",280,0,50,50,60,60);


window.addEventListener("intel.xdk.device.remote.close", function(){});

    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
