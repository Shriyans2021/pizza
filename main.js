menu_list_array = ["Veg Margherita Pizza",//add more items
                    ];
                    <button class= "btn bth-success" onclick="add_top()"> add </button>
                    <h1>chicken pizza</h1>
                    <h2>veg pizza</h2>
                    <h3>tandoori pizza</h3>
                   
                   function get menu() {
                       var htmldata;
                       htmldata= "<ol class='menulist'>"
                       menu_list_array.sort();
                       for (var 1=0;1<menu_list_array.length;i++){
                           htmldata-htmldata+ '<li>'+ menu_list_array '</li>'
                       
                   } 
                   htmldata=htmldata + </ol>
                   document.getElementById("displaymenu").innerHTML = htmldata;
                   }
                   function add_item() {
                       function get menu() {
                           var htmldata;
                           htmldata= "<ol class='menulist'>"
                           menu_list_array.sort();
                           for (var 1=0;1<menu_list_array.length;i++){
                               htmldata-htmldata+ '<li>'+ menu_list_array '</li>'
                       htmldata=htmldata+ <div class= "card">    
                       + '<img src="images/pizzz g.jpg"/>'
                       + menu_list_array[i] + '</div>'
                           }
                           htmldata=htmldata+ "</section>"
                     document.getElementById("display_addedmenu").innerHTML = htmldata
                     function add top () {
                         var item=document.getElementById()"add_item".value;
                         menu_list_array.push(item)
                         add_item
                     }