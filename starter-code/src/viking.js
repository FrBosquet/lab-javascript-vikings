// Soldier
function Soldier ( health, strength ) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}

// Viking
function Viking ( name, health, strength) {
  Soldier.call(this, health, strength );
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon () {}

// War
function War () {}
