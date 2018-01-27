  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAABGC9edTiKN4lGIA8auqRt6cg-y2LY2A",
    authDomain: "employee-database-bcs.firebaseapp.com",
    databaseURL: "https://employee-database-bcs.firebaseio.com",
    projectId: "employee-database-bcs",
    storageBucket: "employee-database-bcs.appspot.com",
    messagingSenderId: "363408932150"
  };
  firebase.initializeApp(config);
  var database =firebase.database();
  var name="";
  var role="";
  var sData="";
  var monthsWorked="";
  var rate="";
  var tBilled="";
  $("#add-employee").on("click",function(){
    console.log("hell yeah")
    name=$("#employee-name").val().trim();
    role=$("#employee-role").val().trim();
    sDate=$("#employee-start-date").val().trim();
    monthsWorked=calcTime(sDate);
    rate=$("#employee-monthly-rate").val().trim();
    tBilled=rate*monthsWorked;
    database.ref().push({
      name: name,
      role: role,
      sDate: sDate,
      monthsWorked: monthsWorked,
      rate: rate,
      tBilled: tBilled,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  })
  function getEmployees(){

  }
  function calcTime(date){
    return 5;
  }