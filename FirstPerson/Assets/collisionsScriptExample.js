#pragma strict
var explosion:Transform;
var detonator:Transform;
var detonatorHuman:Transform;
private var isFalling:boolean=false;
private var   collisions  : Collider []; 
private var closingObjects :Collider[]; 
var radius :float=1;

function Start () {
collisions= GameObject.FindObjectsOfType(Collider);



Destroy(gameObject,3);
}

function Update () {


closingObjects= Physics.OverlapSphere(transform.position,radius);// pernw ta objects pou periexonte stin noiti mou sfaira
 for (var hit : Collider in closingObjects){                   /// pernw ola ta object mou pou einai stin aktina p exw valei
 if(hit.tag.Equals("bullet")||hit.tag.Equals("capsuleOfBullet")) {
 continue;
 }
 
 if(hit){
 //print(" with  OverlapSphere  fine :   "+hit.name);
 }}
 
 
if(isFalling){
//yield WaitForSeconds(3);
}else{
for(var col:Collider in collisions){ // pernw ola ta collisions - tis epafes pou exei ( simfona me to collision tou antikeimenou prepei dld na exei kai to idio mia epifania )
////print(col.transform.name);
if(col){
if(!col.bounds.Intersects(collider.bounds)){
continue;
}
if(col.name.Equals("baseMale")){
print(col.gameObject.layer);
print(col.gameObject.layer==8);}
if(col.gameObject.layer==8){

Instantiate(detonatorHuman,transform.position,transform.rotation);
print("col.transform.name.Equals(baseMale)   in update");
rigidbody.velocity=Vector3(0,-0.5,0);
isFalling=true;
//rigidbody.sleepVelocity=10;
//col.transform.ri
}else if(!col.tag.Equals("bullet")&&!col.tag.Equals("capsuleOfBullet")&&!col.tag.Equals("gunNode")){
var detonatorTransform :Transform=Instantiate(detonator,transform.position,transform.rotation);
//print(detonatorTransform);
Destroy(detonatorTransform.gameObject,1);
}
}
}
}

if(transform.position.y<GameObject.Find("ground").transform.position.y){

Destroy(gameObject);

}
}

//function  OnTriggerStay(hit:Collider){
//
//print("trigger stay");
//rigidbody.velocity=Vector3(0,1,0);
// if(hit.transform.Equals("ground")){
//    
//    stayStill();
//    }
//}

//function OnCollisionEnter(){
//Instantiate(explosion,transform.position,transform.rotation);
////print("collision enter");
////}



//function OnCollisionStay(collisionInfo : Collision){
////print("collision stay");
////print(collisionInfo.transform.name);
//
//
//
////var rigid:Rigidbody=collisionInfo.transform.GetComponent(Rigidbody);
////rigid.AddExplosionForce
//}

function OnCollisionEnter(collision : Collision) {
print("on collision enter"+collision.transform.name);
//print("OnCollisionEnter(collision : Collision)");
//print(collision.transform.name);
if(collision.transform.name.Equals("baseMale")){
print("on collision enter Biq01");
//collision.transform.rigidbody.AddExplosionForce(10,transform.position,10);
}else  if(collision.transform.Equals("ground")){
    rigidbody.velocity=Vector3.zero;
    stayStill();
    }
}

//function OnTriggerEnter (other : Collider){
//
//print("on trigger : "+other.name);
////rigidbody.velocity=Vector3.zero;
//}

//function OnCollisionExit(collisionInfo : Collision) {
//if(collisionInfo.transform.Equals("baseMale")){
//    print( "on collision exit object :"+collisionInfo.transform.name);
//    rigidbody.velocity=Vector3.zero;
//    }else if(collisionInfo.transform.Equals("ground")){
//    
//    stayStill();
//    }
//}
//
function stayStill(){
transform.collider.isTrigger=true;
rigidbody.isKinematic=true;
print(" stay  still");
}