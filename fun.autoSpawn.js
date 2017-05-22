var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_EXTENSION }
});

const x = Game.spawns['Spawn1'].pos.x;
const y = Game.spawns['Spawn1'].pos.y;

console.log(extensions.length)

    var newName;

    var spawn = Game.spawns['Spawn1'];                                  
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');    
    
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    var devotedUpgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'devotedUpgrader');
    
    var repairMan = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');
    
    var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer')
    
    function spawnThis (howMany) {
        this.howMany = howMany;
    }
    
    function harvesters (role, howMany) {
        spawnThis.call(this, howMany);
        this.role = 'harvester'
        this.help = false;
    }
    
    function transfers (howMany) {
        spawnThis.call(this, howMany);          //All these functions are pretty useless right now, but I'm keeping them as reminders.
        this.role = 'transfer';
        this.done = 'false';
    }
    
    function devotedUpgrader (howMany) {
        spawnThis.call(this, howMany);
        this.role = 'devotedUpgrader';
    }
    
    function builder (howmany) {
        spawnThis.call(this, howMany);
        this.role = 'builder';
    }

    function recount (type,real) {
        if (newName == OK) { console.log('Spawning new ' + type + ': ' + newName + ', there are ' + 
        real.length + ' $(type)(s).'); } else { console.log ('Attempting to spawn ' + type + '.' +
        ' There are probably ' + 
        real.length + ' '  + type + '(s), and there\'s ' + spawn.energy + ' energy in the spawn.' ) }
    }
    
var autoSpawn = {
    
    run: function() {
        try {
            
            if (extensions.length < 5) { 
                
                if (harvesters.length < 1) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE],
                    undefined, {role: 'harvester', help: false, dying: 'nOPE'});
                    recount('harvester',harvesters);
                }
                a
                else if (transfers.length < 1) {
                    newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,MOVE,MOVE,MOVE],
                    undefined, {role: 'transfer', done: false, dying: 'nOPE'});
                    recount('transfer',transfers);
                }
        
                else if (devotedUpgrader.length < 2) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE, MOVE],
                    undefined, {role: 'devotedUpgrader', dying: 'nOPE'});
                    recount('devoted upgrader',devotedUpgrader);
                }
        
                else if (builder.length < 2) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE],
                    undefined, {role: 'builder', dying:'nOPE'});
                    recount('builder',builder);
                }

                else if (repairMan.length < 2) {
                    if (Memory.goahead == true) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE],
                    undefined, {role: 'repairman', dying:'nOPE'});
                    recount('repairman',repairMan);
                }   
            }
            
            }
            
            else {
        
                if(harvesters.length < 1) {
                    var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE],
                    undefined, {role: 'harvester', help: false});
                    recount('harvester', harvesters);
                }
        
                else if (transfers.length < 2) {
                    newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],
                    undefined, {role: 'transfer', done: false});
                    recount('transfer', transfers);
                }
        
                else if (devotedUpgrader.length < 2) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE],
                    undefined, {role: 'devotedUpgrader'});
                    recount('devoted upgrader', devotedUpgrader);
                }
        
                else if (builder.length < 2) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE],
                    undefined, {role: 'builder'});
                    recount('builder', builder);
                }

                else if (repairMan.length < 2) {
                    newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE],
                    undefined, {role: 'repairman'});
                    recount('repairman', repairMan);
                }
            }
        }
        
        catch (err) {
            console.log('haha ur screwed. what a complete and utter failure you are, lol. ' + err)
        }
    }
}


module.exports = autoSpawn;
