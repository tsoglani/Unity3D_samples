#pragma strict
public var bulletRigidbody       :      Rigidbody;



function Start () {

}

function Update () {

}


function shooting(){
var rigid:Rigidbody;
rigid= Instantiate(bulletRigidbody,transform.position,transform.rotation);// dimiourgw to  object
rigid.velocity= Vector3.left*3000*Time.deltaTime+Vector3.forward*Random.Range(-1000,1000)*Time.deltaTime;// i aliws //rigid.AddForce(Vector3.left*1000+Vector3.Up*400); /// dinw fora(poreia k "ekriksi" ) sto object

}
