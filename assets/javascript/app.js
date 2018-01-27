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
    event.preventDefault();
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
  function calcTime(date){
    return 5;
  }
  database.ref().on("child_added",function(childSnapshot){
    //add childSnapshot to table
    var newEmployee=childSnapshot.val();
    console.log(newEmployee);
    var table = $("#employees");
    var newRow = $("<tr>")
    var neName = $("<td>").text(newEmployee.name);
    var nrole = $("<td>").text(newEmployee.role);
    var nsDate = $("<td>").text(newEmployee.sDate);
    var nmonthsWorked = $("<td>").text(newEmployee.monthsWorked);
    var nrate = $("<td>").text(newEmployee.rate);
    var ntBilled = $("<td>").text(newEmployee.tBilled);
    table.append(newRow).append(neName).append(nrole).append(nsDate).append(nmonthsWorked).append(nrate).append(ntBilled);
  })