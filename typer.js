// set up text to print, each item in array is new line
var aText = new Array(
"function PlayersService(playersClient, bioClient) {", 
"this.playersClient = playersClient;",
"this.bioClient = bioClient;",
"}",
"PlayersService.prototype.all = function(callback) {",
"this.playersClient.fetchAll(all => {",
"const results = all.results.map(r => parsePerson(r));",
"callback({",
"count: all.count,",
"next: all.next ? all.next.split('=')[1] : null,",
"prev: pageNumber(all.prev),",
"results: results,",
"});",
"});",
"};",
"PlayersService.prototype.get = function(id, callback) {",
"this.playersClient.getPlayer(id, data => {",
"const person = parseDetails(data);",
"getTeam(this.playersClient, data.homeworld, team => {",
"person.team = team.name;",
"this.bioClient.getBioFor(person.name, bio => {",
"person.bio = bio;",
"callback(person);",
"});",
"});",
"});",
"};",
"function parsePerson(data) {",
"return {",
"name: data.name,",
"eid: parseEid(data.url),",
"};",
"}"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.querySelector(".BackgroundText");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();       
