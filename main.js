var roleHarvester = require('role.harvester');                     //A bunch of vars requiring other branches to exist.
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.newbuilder')
var roleDevotedUpgrader = require('role.devotedupgrader')
var roleTester = require('role.tester')
var roleRepairman = require('role.repairman')
var roleFootSoldier = require('role.footsoldier')
var roleEMcarrier = require('role.carrier')
var roleSupplier = require('role.supplier')
var findSources = require('var.findSources')
var findExtensions = require ('var.findExtensions')
var autoSpawn = require('fun.autoSpawn');

module.exports.loop = function () {
    try {
    for(var name in Memory.creeps) {                                    //For every name that exists in the Memory of 'creeps'.
        if(!Game.creeps[name]) {                                        //Checks to see if the name still exists.
            delete Memory.creeps[name];                                 //Deletes the memory of the name to save space if it doesn't,
            console.log('Clearing non-existing creep memory:', name);   //then prints the name it deleted.
        }
    }
    
    var spawn = Game.spawns['Spawn1'];                                  //Creates a variable called spawn.
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');    //Makes an array of harvesters
                                                                                            //by filtering out all the creeps
                                                                                            //that don't have the memory of
                                                                                            //being one.
    
    var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');       //Same for the rest of these,
                                                                                            //but replace 'harvesters' with
                                                                                            //the specified role.
    
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    var devotedUpgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'devotedUpgrader');
    
    var footSoldier = _.filter(Game.creeps, (creep) => creep.memory.role == 'footSoldier');
    
    var repairMan = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');
    
    var emCarrier = _.filter(Game.creeps, (creep) => creep.memory.role == 'emCarrier');
    
    var supplier = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier');
    
    console.log('Harvesters: ' + harvesters.length + ,
    'Builders: ' + builder.length + ,
    'Devoted Upgraders: ' + devotedUpgrader.length + ,
    'Foot soldiers: ' + footSoldier.length + ,          //Shows the amount of each creep with the specified role
    'Repair men: ' + repairMan.length + ,               //in it's memory.
    'Emergency Carriers: ' + emCarrier.length + ,
    'Suppliers: ' + supplier.length);
    
    try {
        
    //autoSpawn.run()
    ech         //Added this in since although 'autoSpawn' doesn't work correctly, it doesn't return any errors.
                //Thus not triggering the catch.
                //So literally everything dies. 
                //Hope to fix that soon.
    }
    catch (err) {
    if(harvesters.length < 2) {            //If there are less than two creeps with the memory of being a harvester...
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE],
        undefined, {role: 'harvester'});                                            //Creates a variable called newName, which
                                                                                    //is the command for spawning a creep.
                                                                                    //The name is left as undefined, so the
                                                                                    //game randomly chooses one for you.
        console.log('Spawning new harvester: ' + newName);                          //The random name is then printed
                                                                                    //along with the specified role.
    }
    
    if(devotedUpgrader.length < 2 && harvesters.length == 2) {                      //Same, except it makes sure that there are
                                                                                    //two harvesters.
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE, MOVE], undefined, {role: 'devotedUpgrader'});
        console.log('Spawning new devoted upgrader: ' + newName);
    }
    
    if(builder.length < 2 && harvesters.length == 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }
    
    if(repairMan.length < 2 && harvesters.length == 2 && builder.length == 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairman'});
        console.log('Spawning new repairman: ' + newName);
    }
     
    if(footSoldier.length < 7 && harvesters.length == 2 && repairMan.length == 100) {
    Game.spawns['Spawn1'].createCreep([MOVE, ATTACK, TOUGH, CARRY, TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,], newName, {role: 'footSoldier'});
    }
    
    if(footSoldier.length < 11 && harvesters.length == 2 && harvesters.length == 1000) {
        Game.spawns['Spawn1'].createCreep([MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, CARRY, CARRY, TOUGH, TOUGH, TOUGH], newName, {role: 'footSoldier'});
    }
    
    if (emCarrier.length < -1 && harvesters.length == 2) {
        Game.spawns['Spawn1'].createCreep([MOVE,MOVE,MOVE,CARRY,CARRY,CARRY], undefined, {role: 'emCarrier'});
    }
    console.log('I mean... You messed up somewhere. ' + err)              //Error for the try/catch.
    }
    
    for(var name in Game.creeps) {                      //For every creep in your game.
        var creep = Game.creeps[name];                  //Creates a variable called creep that contains the name of the creep it's
        if(creep.memory.role == 'harvester') {          //focused on.
            roleHarvester.run(creep);
            //findSources.run(creep);
            //findExtensions.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'devotedUpgrader') {
            roleDevotedUpgrader.run(creep);
        }
        
        if(creep.memory.role == 'repairman') {
            roleRepairman.run(creep);  
        }
        
        if(creep.memory.role == 'footSoldier') {
            roleFootSoldier.run(creep)
        }
        
        if(creep.memory.role == 'emCarrier') {
            roleEMcarrier.run(creep);
        }
        
        if(creep.memory.roll == 'supplier') {
            roleSupplier.run(creep);
        }
}
}
catch (err) {
    
    var insult = Math.floor((Math.random() * 7) + 1);                                               //One of my favorite bits of code
    var ouch = [                                                                                    //right here! It's an error handler
        "Let's see here.... I would say you went wrong right about... HERE! ",                      //that randomly selects an insult to
        "Welp, let's spin the wheel of misfortune. ",                                               //throw at me! It creates a variable
        'Your village will fall. ',                                                                 //called 'insult' that picks a random
        'Everyone is actually dying. ',                                                             //number between zero and seven, then
        "You're screwed. ",                                                                         //rounds it.
        "I actually feel bad for you. ",
        'If I were you, I would either run or fix this problem. If you feel like fixing it, ']
    console.log(ouch[insult] + err);
    
}
}
