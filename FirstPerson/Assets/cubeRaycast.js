#pragma strict


function Start () {


}

function Update () {
var hit: RaycastHit;
Debug.DrawLine(transform.position,transform.TransformDirection(-transform.up),Color.red);

renderer.material.color=Color.red;
if(Physics.Raycast(transform.position,transform.TransformDirection(-transform.up),hit,7.9)){

Debug.DrawLine(transform.position,hit.transform.position,Color.red);

print(hit.transform.name);

}



}


