#pragma strict
var bullets :Rigidbody;
var capsuleOfBullets :Rigidbody;
var power :int=3000;
var gun1:Transform;
var gun2:Transform;
var bomb :Transform;
var throwingBomb :Transform;
 var readyForBomb:boolean =true;
private var isTimeToFire:boolean=true;
private var bombTransform:Transform;
private var isWaitingAnotherBomb:boolean=false;
function Start () {
transform.parent=GameObject.FindGameObjectWithTag("MainCamera").transform;
//capsuleOfBullets=GameObject.Find("capsule");

}

function Update () {
if(transform.tag.Equals("gun1")){
if(Input.GetButtonDown("Fire1")){
gunFire();
}
}else if(transform.tag.Equals("gun2")&&isTimeToFire){
if(Input.GetButton("Fire1")){
isTimeToFire=false;
gunFire();
}
} if(transform.tag.Equals("bomb")){
readyForBomb=true;
isTimeToFire=false;
}else{
readyForBomb=false;
isTimeToFire=true;
}
if(isWaitingAnotherBomb&&transform.tag.Equals("bomb")){

readyForBomb=false;
}

if(!transform.tag.Equals("gun2")){
if(Input.GetKeyDown("2")){
Instantiate(gun2,transform.position,transform.rotation);
Destroy(gameObject);
}
}
if(!transform.tag.Equals("gun1")){
if(Input.GetKeyDown("1")){
bombTransform=Instantiate(gun1,transform.position,transform.rotation);
Destroy(gameObject);
}}

if(Input.GetKeyDown("0")&&!readyForBomb){
Destroy(gameObject);
 Instantiate(bomb,transform.position,transform.rotation);
bomb.collider.isTrigger=true;

}

if(readyForBomb&&Input.GetButtonDown("Fire1")){
EnableBomb();
}

}

public function gunFire(){
var rigid:Rigidbody;
rigid=Instantiate(bullets,transform.position,transform.rotation);
rigid.velocity=-rigid.transform.right*power*Time.deltaTime;
var rigid2:Rigidbody;
rigid2=Instantiate(capsuleOfBullets,transform.position-(Vector3(0,0.5,0.5)),transform.rotation);
rigid2.AddForce(-transform.right*100);
if(!isTimeToFire){
yield WaitForSeconds(0.1);
isTimeToFire=true;
}
}

function EnableBomb(){
Instantiate(throwingBomb,bomb.transform.position,bomb.transform.rotation);
print("shoot bombb");
isWaitingAnotherBomb=true;
yield WaitForSeconds(4);
isWaitingAnotherBomb=false;
print("ready to shoot");


}

