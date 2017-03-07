var roleRepairman = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
            if (creep.carry.energy < creep.carryCapacity) {
            var refill = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] > 0 ;
                }
            }
            )
            
        if (creep.withdraw(refill[0], RESOURCE_ENERGY, creep.carryCapacity) == ERR_NOT_IN_RANGE) {
            creep.moveTo(refill[0]);
        }
    }

var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_WALL) &&
                        structure.hits < (structure.hitsMax / 2) ;
                }
        });
        if(targets.length > 0) {
               if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        } else {
            creep.moveTo(44, 4);
        }
    }
}

module.exports = roleRepairman;
