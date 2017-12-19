var duration : float = 20.0;
var colorStart0 : Color = Color.red;
var colorStart1 : Color = Color.blue;
var color0 : Color = Color.red;
var color1 : Color = Color.blue;
var counter : boolean = false;
var canCallFunction: boolean = true;
var lt : Light;

//config
var configSpeed : float = .025;  


// run on start
function Start () {
    lt = GetComponent.<Light>();
}

// run every frame
function Update () {
   if(canCallFunction) {
   	  UpdateColors();
      Wait(configSpeed);
   }

   // get camera position
   var camX : float = Camera.main.transform.eulerAngles.x;
   var camY : float = Camera.main.transform.eulerAngles.y;
   var camZ : float = Camera.main.transform.eulerAngles.z;
   //Debug.Log("x: "+camX+"... y: "+camY+"... z:"+camZ);

   // update colors based on x position
   //color0 = Color();
   color0 = Color(camX / 5000, camY / 5000, camZ / 5000, 1); 

   // update speed based on y position
   configSpeed = camY / 5000;
}

// delay
function Wait(time : float) {
	canCallFunction= false;
	yield new WaitForSeconds(time);
	canCallFunction= true;
}
  
// update colors 
function UpdateColors() {
    var t : float = Mathf.PingPong(Time.time, duration) / duration;
    // lt.color = Color.Lerp(color0, color1, t);
    if(counter) {
    	lt.color = color0;
	} else {
		lt.color = color1;
	}
	counter = !counter;
}