// (c) 2020 Kaputa Systems, LLC

function do_update() {
    xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
        // we only look for readyState of 4 (DONE), but could process others
		if (xmlhttp.readyState==4) {
            // a switch should be used here
            // and we could look for other values besides 200 and 0
			if (xmlhttp.status==200) {
                // success
                // look at xmlhttp.responseText
			}
			else if (xmlhttp.status== 0) { // if the server goes away, 0 is returned - unless a timeout happens first...
				// handle the server going away
			}
			else { // not a success 
				// handle this
                // show the xmlhttp.status value
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