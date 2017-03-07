var roleEMcarrier = {
    
    run: function(creep) {
        
        if (creep.carry.energy < creep.carryCapacity) {
            var refill = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0 ;
                }
            }
            )
            
        if (creep.withdraw(refill[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(refill[0]);
        }
    } else {
    
    var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION) &&
                            structure.energy < structure.energyCapacity ;
                }
        });
        if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                var refill = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0 ;
                }
            })
                if (creep.transfer(refill[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(refill[0]);
                }
                creep.moveTo(21, 10)
            }
        
    }
}
};
module.exports = roleEMcarrier;
