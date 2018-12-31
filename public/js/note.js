var log = console.log;
var config = {
	apiKey: "AIzaSyDCNWAVr_Pn778hBj4RSGBYcoXjK2IVVBA",
	authDomain: "booldook-note2.firebaseapp.com",
	databaseURL: "https://booldook-note2.firebaseio.com",
	projectId: "booldook-note2",
	storageBucket: "booldook-note2.appspot.com",
	messagingSenderId: "63310701259"
};
firebase.initializeApp(config);

var db = firebase.database();
var auth = firebase.auth();
var google = new firebase.auth.GoogleAuthProvider();

$("#bt_google").on("click", function(){
	auth.signInWithPopup(google).then(function(data){
		
	});
});
$("#bt_logout").on("click", function(){
	auth.signOut().then(function(){
		log("로그아웃");
	});
});
auth.onAuthStateChanged(function(data){
	log(data);
});