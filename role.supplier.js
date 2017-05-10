var roleSupplier = {
    
    run: function(creep) {
        
        if (creep.carry.energy < creep.carryCapacity) {
            var refill = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0 ;
                }
            }
            )
            
        if (creep.withdraw(refill[3], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(refill[3]);
        }
        }
        var supplies = creep.room.find(FIND_MY_CREEPS, {
            filter: (creep) => {
                return (creep.memory.role == 'footSoldier') && creep.carry.energy < creep.carryCapacity;
            }
        });
        if (creep.transfer(supplies[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(supplies[0]);
        }
    
    


}
};

module.exports = roleSupplier;
