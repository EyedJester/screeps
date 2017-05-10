var roleHarvester = require('role.harvester');                     //A bunch of vars requiring other modules to exist.
var roleBuilder = require('role.newbuilder')
var roleDevotedUpgrader = require('role.devotedupgrader')
var roleRepairman = require('role.repairman')
var findSources = require('var.findSources')
var autoSpawn = require('fun.autoSpawn');
var extensions = require('fun.autoSpawn');
var chant = ['CmdSharp', "if you're", 'reading', "this", "please", "let us dig", "and don't", "kill us.."];
var roleTransfer = require('role.transfer');

Memory.goahead = false;



Memory.i = 0;

module.exports.loop = function () {
    console.log(Game.cpu.getUsed());
    Memory.i++;
    if (Memory.i === chant.length) { Memory.i = 0 }
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
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    var devotedUpgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'devotedUpgrader');

    var repairMan = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');
    
    var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer');
    
    function pick (l,c,t){
    if(l>c){
    l = l - 1;
    t[l].suicide();
    console.log(t[l])
    }
    }
    
    console.log('Harvesters: ' + harvesters.length + 
    ', Builders: ' + builder.length + 
    ', Devoted Upgraders: ' + devotedUpgrader.length +   //Shows the amount of each creep with the specified role
    ', Repair men: ' + repairMan.length +                //in it's memory.
    ', Transfer: ' + transfers.length);
    
    if (devotedUpgrader.length === 2 && builder.length === 2 && harvesters.length === 1 && transfers.length === 1) { Memory.ideal = true; } else { Memory.ideal = false; }
    
    console.log('Is everything ideal? ' + Memory.ideal)
    if (Memory.ideal === true) { Game.notify('Right now, conditions are PERFECT.    ~ Overseer') }
    
    try {
        
    autoSpawn.run()

    }
    catch (err) {
    console.log("You messed up this time! Main module, autospawning. " + err)
    }
    
    for(var name in Game.creeps) {                      //For every creep in your game.
        var creep = Game.creeps[name];                  //Creates a variable called creep that contains the name of the creep it's
        if(creep.memory.role == 'harvester') {          //focused on.
            roleHarvester.run(creep);
            //creep.say(chant[Memory.i]);
            if (harvesters.length > 1) {
                Game.notify("TOO MANY HARVESTERS!! We love'em, but we gotta get rid of some.    ~ Overseer")
                pick(harvesters.length, 1, harvesters);
            }
        }
        
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            if (builder.length > 2) {
                Game.notify('TOO MANY BUILDERS!! Currently exterminating.    ~ Overseer')
                pick(builder.length, 2 , builder)
            }
        }
        if(creep.memory.role == 'devotedUpgrader') {
            roleDevotedUpgrader.run(creep);
            if (devotedUpgrader.length > 2) {
                Game.notify('TOO MANY UPGRADERS!! Currently exterminating.   ~ Overseer')
                pick(devotedUpgrader.length, 2, devotedUpgrader)
            }
        }
        
        if(creep.memory.role == 'transfer') {
            roleTransfer.run(creep);
            if (transfers.length > 1) {
                Game.notify('TOO MANY TRANSFER DUDES!! Exterminating now.   ~ Overseer');
                pick(transfers.length, 1, transfers)
            }
        }
} 

console.log('i = ' + Memory.i);
console.log(Game.cpu.getUsed());
console.log();

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
