// (c) 2020 Kaputa Systems, LLC

function do_update() {
    xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
        // we only look for readyState of 4 (DONE), but could process the others:
        // 0 UNSENT 	        Client has been created. open() not called yet.
        // 1 OPENED 	        open() has been called.
        // 2 HEADERS_RECEIVED 	send() has been called, and headers and status are available.
        // 3 LOADING 	        Downloading; responseText holds partial data.
		if (xmlhttp.readyState==4) {
            // and we could look for other readyState values besides 200 and 0
            switch(xmlhttp.status) {
                case 200: // success
                    // look at xmlhttp.responseText
                    // document.getElementById.innerHTML = ...
                    break;
                case 0: // if the server goes away, 0 is returned(?) - unless a timeout happens first...
                    // how is this different from a timeout?   
                    // handle the server going away
                    break;
                default: // not a success 
                    // handle this
                    // show the xmlhttp.status and xmlhttp.statusText
			}
		}
	}
	xmlhttp.ontimeout = function () {
  		// XMLHttpRequest timed out. 
        // handle it
	};
	
	xmlhttp.open("GET","<my URL / file>",true);
	xmlhttp.timeout = 5000; // milliseconds - must be after open() call for IE
	xmlhttp.send();
}