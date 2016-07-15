#pragma strict
private var ground:Transform;
function Start () {
ground=GameObject.Find("ground").GetComponent(Transform);

}

function Update () {
if(transform.position.y<ground.position.y){
Destroy(gameObject,0.5);

}
}

function OnCollisionEnter(collision:Collision){
//print("collisions");
if(collision.transform.name=="Cube"){
Destroy(gameObject);
var rigid :Rigidbody=collision.transform.GetComponent(Rigidbody);
rigid.AddExplosionForce(700,transform.position,10);
}

}