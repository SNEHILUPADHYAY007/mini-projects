const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 10;

const maxLife = +(prompt("enter max-life u want to use","100"));
if(maxLife<=0 || isNaN(maxLife)){
    maxLife=100;
}
//console.log(typeof(maxLife));


let currentMonsterHealth = maxLife;
let currentAttackerHealth = maxLife;
let count = 0;
adjustHealthBars(maxLife);

function reset() {
  currentAttackerHealth = maxLife;
  currentMonsterHealth = maxLife;
  resetGame(maxLife);
}

function endRound() {
  const damageMonster = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentAttackerHealth -= damageMonster;
  if (currentMonsterHealth <= 0 && currentAttackerHealth > 0) {
    alert("you won!");
    reset();
  } else if (currentAttackerHealth <= 0 && currentMonsterHealth > 0) {
    if (count === 0) {
      currentAttackerHealth = maxLife;
      increasePlayerHealth(currentAttackerHealth);
      bonusLifeEl.innerHTML = 0;
      count++;
      reset();
    } else {
      alert("you lost!");
      reset();
    }
  } else if (currentMonsterHealth <= 0 && currentAttackerHealth <= 0) {
    alert("hey it's a draw!");
    reset();
}

  console.log(currentAttackerHealth);
}

function damageToPlayers(damageToMonster) {
  const damage = dealMonsterDamage(damageToMonster);
  currentMonsterHealth -= damage;
  endRound();
}

function attackMonster() {
  damageToPlayers(ATTACK_VALUE);
}

function strongAttackMonster() {
  damageToPlayers(STRONG_ATTACK_VALUE);
}

function healPlayer() {
  let healValue;
  if (currentAttackerHealth >= maxLife - HEAL_VALUE) {
    alert("not possible");
    healValue -= HEAL_VALUE;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentAttackerHealth += healValue;
  endRound();
}

attackBtn.addEventListener("click", attackMonster);
strongAttackBtn.addEventListener("click", strongAttackMonster);
healBtn.addEventListener("click", healPlayer);
