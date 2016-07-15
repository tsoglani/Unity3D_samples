#pragma strict

var explosion:Transform ;
private var closingObjects :Collider[]; 
var radius :float=10;
function Start () {
 print("bomb is ennable");
 Destroy(gameObject,10);
 rigidbody.isKinematic=false;
  rigidbody.AddForce(-transform.right*1000);
}

function Update () {

}


function OnDestroy () {
Instantiate(explosion,transform.position,transform.rotation);
closingObjects= Physics.OverlapSphere(transform.position,radius);// pernw ta objects pou periexonte stin noiti mou sfaira
 for (var hit : Collider in closingObjects){                   /// pernw ola ta object mou pou einai stin aktina p exw valei
 if(hit) {
 if(hit.gameObject.layer==8){
 print(" your hit " +hit.name);
 }
 
 }}
}
 function ennableBomb(){
 //gameObject.AddComponent(Rigidbody);



 
 }