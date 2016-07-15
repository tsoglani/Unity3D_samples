#pragma strict
var speed :int=7;
var backSpeed :int=3;
var rotateSpeed :int=100;
function Start () {

}

function Update () {
transform.Rotate(0,Input.GetAxis("Horizontal")*rotateSpeed/2*Time.deltaTime,0);//anti gia Input.GetKey(KeyCode.A);
transform.Rotate(0,Input.GetAxis("Mouse X"),0);
var currentSpeed:int;

if(Input.GetAxis("Vertical")>0){
currentSpeed=speed;
}if(Input.GetAxis("Vertical")<0){
currentSpeed=backSpeed;
}


transform.Translate(currentSpeed*Input.GetAxis("Vertical")*Time.deltaTime,0,0);
}