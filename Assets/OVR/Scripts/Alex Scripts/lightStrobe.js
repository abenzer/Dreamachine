// Interpolate light color between two colors back and forth
var duration : float = 20.0;
var color0 : Color = Color.red;
var color1 : Color = Color.blue;
var counter : boolean = false;
var canCallFunction: boolean = true;
var lt : Light;

/* config */
var configSpeed : float = .025;  


/* run on start */
function Start () {
    lt = GetComponent.<Light>();
}

/* run every frame */
function Update () {
   if(canCallFunction) {
   	  UpdateColors();
      Wait(configSpeed);
   }

}

/* delay */
function Wait(time : float) {
	canCallFunction= false;
	yield new WaitForSeconds(time);
	canCallFunction= true;
}
  
/* update colors */
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