if	(typeof(Storage)	!==	"undefined")	{
  //localStorage.setItem("name", "Batman");
  console.log(localStorage.getItem("name"));
  //localStorage.removeItem("name");
}	else	{
  console.log("No tienes Storage");
}
