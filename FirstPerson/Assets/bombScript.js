#pragma strict
function Start () {
transform.parent=GameObject.FindGameObjectWithTag("MainCamera").transform;
rigidbody.isKinematic=true;
transform.collider.isTrigger=true;
}

function Update () {

}



// function ennableBomb(){
// //gameObject.AddComponent(Rigidbody);
// print("bomb is ennable");
// Destroy(gameObject,10);
//rigidbody.isKinematic=false;
// rigidbody.AddForce(-transform.right*1000);
// 
// }