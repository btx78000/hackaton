/* JS */

$(document).ready(function(){
	var pos_start = new Array();
	pos_start['top'];
	pos_start['left'];
	/* Events */
	// Quand on appuie sur le bouton
    document.addEventListener('mouseup', function(evt)
	{
         if(GetSelectedText() != "")
          {
			alert(getMousePosition());
			addElement();
          }



     }, false);

    document.addEventListener('mousedown', function(evt)
	{
		delElement();
		pos_start['top'] = getMousePosition()[1];
		pos_start['left'] = getMousePosition()[0];
    }, false);

     
    function addElement()
    {
		var div = document.createElement('div');
		div.className = "btn-add-note";
		div.innerHTML = "Annotation";
		div.style.top = pos_start['top'] - 50 +'px';
		div.style.left = pos_start['left'] + 'px';
		document.body.appendChild(div);

	}
	
	function delElement()
	{
		$('.btn-add-note').remove();
	}

     function GetSelectedText()
     {
		if (window.getSelection)
		{  // all browsers, except IE before version 9
		   var range = window.getSelection();
		   return (range.toString());
		}
     }

	document.getElementById("notebutton").addEventListener("click", function()
	{
		var elem = document.getElementById("notemenu");
		if(elem.style.display == "none")
		{
			elem.style.display = "block";
		}
		else
		{
			elem.style.display = "none";
		}
	}
	, false);

     function displayBlock(id)
     {
     	
     }

     function getMousePosition(event)
	{
		var e = event || window.event;
		var scroll = new Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);;
		return (new Array(e.clientX + scroll[0] - document.body.clientLeft,e.clientY + scroll[1] - document.body.clientTop));
	}



});

