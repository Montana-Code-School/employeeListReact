serviceCalculator = function(datestr){
  var year = parseInt(datestr.slice(6,10));
  var month = parseInt(datestr.slice(0,2))/12;
  var day = parseInt(datestr.slice(3,5))/(31*12);
  var newdatestr = year + month + day;

  var now = new Date();
  var yearnow = now.getFullYear();
  var monthnow = (now.getMonth() + 1)/12;
  var daynow = now.getDate()/(31*12);
  var nowstr = yearnow + monthnow + daynow;

  var service = Math.round((nowstr - newdatestr)*100)/100;
  return service;

}

employeeList = [
  {
    name: "Nick Marucci",
    position: "Instructor",
    hireDate: "05/05/2016",
    imgurl: "https://media.licdn.com/media/AAEAAQAAAAAAAAmKAAAAJDI5YWVhMzAxLTdlNzItNDg5Mi05NzliLWM3ZWU0NTlkYTc4OA.jpg",
    DOB: "08/28/1986"
  },{
    name: "Lance Barney",
    position: "Teaching Assistant",
    hireDate: "09/05/2016",
    imgurl: "https://media.licdn.com/media/AAEAAQAAAAAAAAgmAAAAJDA1NDI0ZjdiLWQ0NzgtNDFkYy1hNDdkLTIxMDc4M2U0NWFhNw.jpg",
    DOB: "12/12/1970"
  },{
    name: "Bennington Shermhire",
    position: "Chief Beer Officer",
    hireDate: "01/03/2012",
    imgurl: "https://s-media-cache-ak0.pinimg.com/564x/e6/fd/53/e6fd534144f124905e52c1acac4a1b50.jpg",
    DOB: "08/28/1980"
  },{
    name: "Steve",
    position: "Crappy Neighbor",
    hireDate: "07/15/1980",
    imgurl: "http://67.media.tumblr.com/b077e18f6e5d04e93fb616825fe2ac13/tumblr_n1kx2jVn5g1t06hqzo1_400.jpg",
    DOB: "11/01/1923"
  },{
    name: "Michael Simon",
    position: "Office Cook",
    hireDate: "07/06/2010",
    imgurl: "http://www.bullz-eye.com/television/interviews/2010/images/michael_symon/michael_symon_01.jpg",
    DOB: "03/12/1976"
  },{
    name: "Michael Scott",
    position: "General Manager",
    hireDate: "02/21/2008",
    imgurl: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    DOB: "06/19/1972"
  },{
    name: "Dwight Schrute",
    position: "Assistant To the General Manager",
    hireDate: "11/09/2010",
    imgurl: "http://az616578.vo.msecnd.net/files/2016/03/18/635938576358248374-790615222_UpstandingCitizen_014_Dwight-Schrute-Office.jpg",
    DOB: "12/23/1979"
  },{
    name: "Buzz DogYear",
    position: "Office Guard",
    hireDate: "04/22/2013",
    imgurl: "https://aos.iacpublishinglabs.com/question/aq/700px-394px/lazy-dog-breeds_e3afe11a89f7727c.jpg?domain=cx.aos.ask.com",
    DOB: "01/29/2012"
  },{
    name: "Bob Higgins",
    position: "The Actual Security Guard",
    hireDate: "09/03/2011",
    imgurl: "http://1.media.collegehumor.cvcdn.com/57/18/0fae99c48dd98c48f6c195d95ba5f13a.jpg",
    DOB: "03/25/1966"
  }
]

for (var i = 0; i < employeeList.length; i++) {
  employeeList[i].yearsOfService = serviceCalculator(employeeList[i].hireDate);
  employeeList[i].age = serviceCalculator(employeeList[i].DOB);
}
