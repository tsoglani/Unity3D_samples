#pragma strict
private var hit:RaycastHit;
function Start () {

}

function Update () {
if(Physics.Raycast(transform.position,transform.right,hit,10)){
if(hit.transform.name=="allCar")
Debug.DrawLine(transform.position,hit.transform.position,Color.red);
}
if(Physics.Raycast(transform.position,-transform.right,hit,10)){
if(hit.transform.name=="allCar")
Debug.DrawLine(transform.position,hit.transform.position,Color.magenta);
}

if(Physics.Raycast(transform.position,transform.TransformDirection(-transform.forward),hit,10)){// me to transform.TransformDirection ginete pio akriveis se megales sxetika apostaseis  

Debug.DrawLine(transform.position,hit.transform.position,Color.gray);
//print(hit.distance);
}

}