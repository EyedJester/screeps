var roleTester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else { if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        } else { 
            var structure = creep.room.find(FIND_MY_STRUCTURES)
            if(creep.transfer(structure[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure[0]);
            }
            //creep.moveTo(33, 11);
        }
        
	}
    }
};

module.exports = roleTester;
