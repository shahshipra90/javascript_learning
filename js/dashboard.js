//var row = 1;

/*var n = document.getElementById('form2Example1').value;
var m = document.getElementById('form2Example2').value;
var p = document.getElementById('form2Example3').value;*/
//console.log(localStorage.getItem("txtValue"));
//console.log(localStorage.getItem("txtValue1"));
//console.log(localStorage.getItem("txtValue2"));
/*document.write("Name:  ");
document.write(localStorage.getItem("txtValue"));
document.write("<br>");
document.write("Email Id:  ");
document.write(localStorage.getItem("txtValue1"));
document.write("<br>");
document.write("Password:  ");
document.write(localStorage.getItem("txtValue2"));*/
/*
var list_1 = [];
var list_2 = [];
var list_3 = [];
var n = 1;
var x = 0;

var add_row = document.getElementById("table_1");
var new_row = add_row.insertRow(n);

list_1[x] = localStorage.getItem("txtValue");
list_2[x] = localStorage.getItem("txtValue1");
list_3[x] = localStorage.getItem("txtValue2");

var cel_1 = new_row.insertCell(0);
var cel_2 = new_row.insertCell(1);
var cel_3 = new_row.insertCell(2);

cel_1.innerHTML = list_1[x];
cel_2.innerHTML = list_2[x];
cel_3.innerHTML = list_3[x];

n++;
x++;
*/
  /*var display = document.getElementById("table_1");
  var new_row = display.insertRow(row);

  var name = localStorage.getItem("txtValue");
  var mail = localStorage.getItem("txtValue1");
  var pass = localStorage.getItem("txtValue2");

  var cell_1 = new_row.insertCell(0);
  var cell_2 = new_row.insertCell(1);
  var cell_3 = new_row.insertCell(2);

  cell_1.innerHTML = name;
  cell_2.innerHTML = mail;
  cell_3.innerHTML = pass;

  row++;*/


  /*function display(){
//    getData();
//var arr = new Array();
  //  arr.push({
      var fname = localStorage.getItem("txtValue");
      var mail =  localStorage.getItem("txtValue1");
      var password = localStorage.getItem("txtValue2");

    //});
  /*  localStorage.setItem("localData",JSON.stringify(arr));
    funtion getData(){
      var str = localStorage.getItem("localData");
      if(str != null)
        arr = JSON.parse(str);
    }*/
    //funtion showData(){
    //  getData();
    /*  var display = document.getElementById("table_1");
      for(int i = 0;i<arr.length;i++){
        var new_row = display.insertRow();
        var cell_1 = new_row.insertCell();
        var cell_2 = new_row.insertCell();
        var cell_3 = new_row.insertCell();

        cell_1.innerHTML = arr[i].fname;
        cell_2.innerHTML = arr[i].mail;
        cell_3.innerHTML = arr[i].password;
        console.log('txtValue');
        //console.log(localStorage.getItem("txtValue"))
      //}
    }
  }*/
  cosnt signup = e => {
    let form_data = JSON.parse(localStorage.getItem('form1')) || [];
    JSON.parse(localStorage.getItem('form1')).some(data =>.fname.toLowerCase() ==)
  }
function display(){

        output.innerHTML =
      <tr>
        <td>localStorage.getItem("txtValue")</td>
        <td>localStorage.getItem("txtValue1")</td>
        <td>localStorage.getItem("txtValue2")</td>
      </tr>;

}
