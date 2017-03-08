
/* This works. That is, if works means DOESN'T WORK AT ALL. Refrain from using this for now. */


var findExtensions = require('var.findExtensions')          //Creates a array called 'findExtensions'
                                                            //that pulls directly from the branch.
var autoSpawn = {
    
    run: function() {
        try {
    if (findExtensions.run() < 5) {         //What was SUPPOSED to happen was that findExtensions would become
                                            //an array, and if that array was greater than five, all of this
                                            //would activate. It didn't work out.
    if(harvesters.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], //Does everything the main
        undefined, {role: 'harvester'});                                           //function does. Does not require
        console.log('Spawning new harvester: ' + newName);                         //explanation.
    }
    
    if(devotedUpgrader.length < 2 && harvesters.length == 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE, MOVE],
        undefined, {role: 'devotedUpgrader'});
        console.log('Spawning new devoted upgrader: ' + newName);
    }
    
    if(builder.length < 2 && harvesters.length == 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE],
        undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }
    
    if(repairMan.length < 2 && harvesters.length == 2 && builder.length == 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE],
        undefined, {role: 'repairman'});
        console.log('Spawning new repairman: ' + newName);
    }
     
    if(footSoldier.length < 7 && harvesters.length == 2 && repairMan.length == 100) {
    Game.spawns['Spawn1'].createCreep([MOVE, ATTACK, TOUGH, CARRY, TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,],
    newName, {role: 'footSoldier'});
    }
    
    if(footSoldier.length < 11 && harvesters.length == 2 && harvesters.length == 1000) {
        Game.spawns['Spawn1'].createCreep([MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, CARRY, CARRY, TOUGH, TOUGH, TOUGH],
        newName, {role: 'footSoldier'});
    }
    
    if (emCarrier.length < -1 && harvesters.length == 2) {
        Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,CARRY,CARRY,CARRY],
        undefined, {role: 'emCarrier'});
    }
        
    }
    else {
        
        
        
    }
    }
    catch (err) {
    console.log('haha ur screwed ' + err)   //Self-fulfilling prophecy.
    }
    }
    
}



module.exports = autoSpawn;
