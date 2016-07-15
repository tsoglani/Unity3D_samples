#pragma strict
private var capsule1:Transform;
private var capsule2:Transform;

function Start () {
capsule1=transform.Find("capsule1").transform;
capsule2=transform.Find("capsule2").transform;
Destroy(gameObject ,6);
}

function Update () {
if(transform.position.y<GameObject.Find("ground").transform.position.y){

Destroy(gameObject);

}
}

function OnTriggerStay (other : Collider) {
if(other.transform.name.Equals("ground")){
//rigidbody.useGravity=false;
//transform.collider.enabled=true;
//transform.Translate(0,100*Time.deltaTime,0);
//print("find ground");
//transform.parent=GameObject.Find("ground").transform;
capsule1.rigidbody.isKinematic=true;
//capsule2.rigidbody.isKinematic=true; // i capsule2 den exei gravity ara den askei dinami
rigidbody.isKinematic=true;
yield WaitForSeconds (3);
rigidbody.isKinematic=false;
capsule1.rigidbody.isKinematic=false;
//capsule1.collider.isTrigger=false;
//capsule2.collider.isTrigger=false;
rigidbody.AddForce(Vector3(0,-1000*Time.deltaTime,0));
}
//if(other.transform.name.Equals("First Person Controller")){
//capsule1.collider.isTrigger=true;
//capsule2.collider.isTrigger=true;
//print("find First Person Controller");
//}
 
}