/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("backbutton", backKeyDown, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {




var someSetting = localStorage.getItem('someSetting');
//document.getElementById("hier").innerHTML=someSetting;
document.getElementById("newpage1").style.display="none"
document.getElementById("newpage2").style.display="none"
if (someSetting=="1") 
		{document.getElementById('radio1').checked=true;
		openme(11)
		}
if (someSetting=="2") 
		{document.getElementById('radio2').checked=true;
		openme(12)
			}
if (someSetting=="3") {document.getElementById('radio3').checked=true;
         }
if (someSetting=="4") //achterlijfspatronen
		{document.getElementById('radio4').checked=true;
		openme(14)
			}


if (someSetting=="5") //biotoop
		{document.getElementById('radio5').checked=true;
		openme(15)
			}

if (someSetting=="6") //vliegtijd
		{document.getElementById('radio6').checked=true;
		openme(16)
			}






        app.receivedEvent('deviceready');
		window.open = cordova.InAppBrowser.open;
		//navigator.splashscreen.show();
		//ver=AppVersion.version; // e.g. "1.2.3" 
		document.getElementById('version').innerHTML= navigator.appName + " : " + navigator.appVersion+ " : " + navigator.appCodeName;

			//alert( "jahoor");
			

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		document.getElementById('splash').style.display='block';

        console.log('Received Event: ' + id);
    }
};
function backKeyDown() { 
    // do something here if you wish
	if (p7) {
		closeme(17);
		return;}
	if (p4) {
		closeme(14);
		return;}
	if (s1) {
		closeme(1);
		return;}
	if (p3) {
		closeme(13);
		return;}



	


	if (p1) {
		closeme(11);
		return;}
	if (p2) {
		closeme(12);
		return;}
	
	
	if (p5) {
		closeme(15);
		return;}
	if (p6) {
		closeme(16);
		return;}
	
	
	
	
	
	if (s3) {
		closeme(3)
	return;}

	if (s5) {
		closeme(5)
	return;}

	if (s4) {
	document.getElementById('mySidebar').style.display='none';
	document.getElementById('myOverlay').style.display='none';
	s4=0;
	return;}

	if (s2) {
		closeme(2);
	return;}

	navigator.app.exitApp();
    //alert('go back!');
}
