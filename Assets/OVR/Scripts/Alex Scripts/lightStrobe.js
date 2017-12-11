// Interpolate light color between two colors back and forth
var duration : float = 20.0;
var color0 : Color = Color.red;
var color1 : Color = Color.blue;
var color2 : Color = Color.black;
var counter : boolean = false;

var lt: Light;

function Start () {
    lt = GetComponent.<Light>();
}

function Update () {
    var t : float = Mathf.PingPong(Time.time, duration) / duration;
    // lt.color = Color.Lerp(color0, color1, t);
    if(counter) {
    	lt.color = color0;
	} else {
		lt.color = color1;
	}
	counter = !counter;
}