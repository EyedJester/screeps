

var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
        
        
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            
            var transfers = creep.room.find(FIND_MY_CREEPS, {
                filter: (creep) => {
                    return (creep.memory.role == 'transfer');
                }
            });
            
            creep.memory.help = true;
            creep.transfer(transfers[0], RESOURCE_ENERGY)
        }
	}
};

module.exports = roleHarvester;
