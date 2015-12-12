var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit! Congrats!");        
        totalDamage = totalDamage + damageThisRound;
        console.log("Total damage = " + totalDamage);
        if (totalDamage >=4 ) {
            console.log("You slew the dragon!");
            console.log("Total damage = " + totalDamage);
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log(":( The dragon defeated you!");
        slaying = false;
    }
}