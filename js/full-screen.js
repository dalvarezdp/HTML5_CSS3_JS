function	launchFullscreen()	{
		if(document.requestFullscreen)	{
				document.requestFullscreen();
		}	else	if(document.mozRequestFullScreen)	{
				document.mozRequestFullScreen();
		}	else	if(document.webkitRequestFullscreen)	{
				document.webkitRequestFullscreen();
		}	else	if(document.msRequestFullscreen)	{
				document.msRequestFullscreen();
		}
}

function	exitFullscreen()	{
		if(document.exitFullscreen)	{
				document.exitFullscreen();
		}	else	if(document.mozCancelFullScreen)	{
				document.mozCancelFullScreen();
		}	else	if(document.webkitExitFullscreen)	{
				document.webkitExitFullscreen();
		}	else	if(document.msExitFullscreen)	{
				document.msExitFullscreen();
		}
}
