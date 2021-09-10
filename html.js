
////// Web Page Helpers

// Returns the browser's page visibility property
function PageVisibilityProp(){
    var prefixes = ['webkit','moz','ms','o'];    
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';    
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
}

// Asks if a page is "visible"
function isPageVisible() {
    var prop = PageVisibilityProp();
    if (!prop) return true;    
    return !document[prop];
}

// Get me a random CSS color from a curated list
function GetAColor( seed ) {
 var colors = ["Aqua","Aquamarine","Black","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse",
 "Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey",
 "DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon",
 "DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink",
 "DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gainsboro","Gold","GoldenRod",
 "Gray","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","Khaki","Lavender",
 "LawnGreen","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow",
 "LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
 "LightSlateGrey","LightSteelBlue","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine",
 "MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
 "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","Olive",
 "OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip",
 "PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown",
 "Salmon","SandyBrown","SeaGreen","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey",
 "SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","Yellow",
 "YellowGreen"];
 return (""+colors[seed%colors.length]).trim();
}

// Responsive test
function ProbeAreaWidth(domid) {
  var probe=document.createElement("div");
	 var outer=Get(domid);
  outer.appendChild(probe);
	 probe.setAttribute("id","ProbeAreaWidth-probe");
	 probe.setAttribute("style","width:100%;");
	 var totalW=probe.clientWidth;
  outer.removeChild(probe);
  return totalW;
}

////// HTML helpers

// One or more non-breaking spaces
function nbsp( count=1 ) {
 var s="";
 for ( var i=0; i<count; i++ ) s+="&nbsp;";
 return s;
}

// Fontawesome Icon
function faicon( css=null, tip=null, inner="", id=null, style=null, click=null ) {
 var s='<i';
 if ( tip ) s+= ' alt="'
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="fa '+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 s+='>';
 return s+inner+'</i>';
}

// <I> as an icon tag
function icon( css=null, tip=null, inner="", id=null, style=null, click=null ) {
 var s='<i';
 if ( tip ) s+= ' alt="'
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 s+='>';
 return s+inner+'</i>';
}

// Href as a button
function hrefbtn( inner="", click=null, css=null, id=null, style=null, other=null ) {
 var s='<a href="#" ';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</a>';
}

// Form input elements (and datalist)
function input( id=null, type="text", placeholder=null, css=null, style=null, value=null, min=null, max=null, datalist=null, disabled=null, other=null ) {
 var s='<input type="'+type+'"';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( placeholder ) s+=' placeholder="'+placeholder+'"';
 if ( disabled ) s+=' disabled=disabled';
 if ( value ) s+=' value="'+value+'"';
 if ( min ) s+=' min="'+min+'"'; else if ( max ) s+=' min="none"';
 if ( max ) s+=' max="'+max+'"'; else if ( min ) s+=' max="none"';
 var after="";
 if ( datalist && is_array(datalist) && datalist.length > 0 ) {
  s+=' list="'+id+'-datalist"';
  after+='<datalist id="'+id+'-datalist">';
  for ( var i=0; i<datalist.length; i++ ) {
   after+='<option value="'+datalist[i]+'">';
  }
  after+='</datalist>';
 }
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 return s+' />'+after; 
}

// Form input elements (and datalist)
function radio( id=null, css=null, style=null, list=null, value=null, disabled=null, between="<BR>", lcss=null, lstyle=null, other=null ) {
 var ss="";
 for ( var i=0; i<list.length; i++ ) {
	 var s='<input type="radio"';
     if ( id ) s+=' id="'+id+'-'+i+'"';
     if ( css ) s+=' class="'+css+'"';
     if ( style ) s+=' style="'+style+'"';
     if ( disabled ) s+=' disabled=disabled';
     if ( value ) s+=' value="'+list[i][1]+'"';
     if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
     s+=' />';
	 l='<label for="'+id+'-'+i+'"';
     if ( css ) l+=' class="'+lcss+'"';
     if ( style ) l+=' style="'+lstyle+'"';
	 l+='>';
	 l+=list[i][0];
     l+='</label>';
	 ss+=s+l+between;
 }
 return ss;
}

function checkbox( id=null, checked=false, value=null, css=null, style=null, disabled=null ) {
 var s='<input type="checkbox"';
 if ( checked && istrue(checked) ) s+=" checked";
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( placeholder ) s+=' placeholder="'+placeholder+'"';
 if ( disabled ) s+=' disabled=disabled';
 if ( value ) s+=' value="'+value+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 return s+' />'+after; 
}


// A button
function button( inner="", click=null, css=null, id=null, style=null, other=null ) {
 var s='<button';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</button>';
}

// p
function p( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<p';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</p>';
}

// Heading 6
function h6( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<h6';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 s+='>';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 return s+inner+'</h6>';
}

// Heading 5
function h5( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<h5';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</h5>';
}

// Heading 4
function h4( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<h4';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</h4>';
}

// Heading 3
function h3( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<h3';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</h3>';
}

// Heading 2
function h2( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<h2';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</h2>';
}

// Heading 1
function h1( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<h1';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</h1>';
}

// small tag
function small( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<small';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</small>';
}

// span tag
function span( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<span';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</span>';
}

// div tag
function div( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<div';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</div>';
}

// table, tr, th, td, td_ (multi-span)

function thead( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<thead';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</thead>'; 
}

function tbody( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<tbody';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</tbody>'; 
}

function tfoot( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<tfoot';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</tfoot>'; 
}

function table( body="", head="", foot="", css=null, id=null, style=null, other=null ) {
 var s='<table';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+=' cellpadding=0 cellspacing=0>';
 return s+(head && head.length>0?thead(head):"")+(body && body.length >0?tbody(body):"")+(foot && foot.length>0?tfoot(foot):"")+'</table>'; 
}

function th( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<th';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</th>'; 
}

function tr( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<tr';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</tr>'; 
}

function td( inner="", width=null, css=null, id=null, style=null, click=null, other=null ) {
 var s='<td';
 if ( width ) s+=' width="'+width+'"';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</td>'; 
}

function td_( columns, inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<td colspan='+columns;
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</td>'; 
}

// canvas tag
function canvas( id=null, style=null, css=null, other=null ) {
 var s='<canvas';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+'</canvas>';
}

// ol tag
function ol( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<ol';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</ol>';
}

// ul tag
function ul( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<ul';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</ul>';
}

// li tag
function li( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<li';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</li>';
}

// center tag
function center( inner="", css=null, id=null, style=null, click=null, other=null ) {
 var s='<center';
 if ( id ) s+=' id="'+id+'"';
 if ( css ) s+=' class="'+css+'"';
 if ( style ) s+=' style="'+style+'"';
 if ( click ) s+=' onclick="javascript:'+click+'"';
 if ( other ) { if ( is_array(other) ) { for ( var i=0; i<other.length; i++ ) s+=' '+other[i].name+'="'+other[i].value+'"'; } else s+=other; }
 s+='>';
 return s+inner+'</center>';
}
