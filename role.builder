
/* This whole thing isn't even used. */

var roleBuilder = {
    
    
    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.carry.energy == creep.carry.carryCapacity) {creep.memory.builder = true}
        if (creep.carry.energy == 0) {creep.memory.harvester = true}
        
        
        if(creep.memory.harvester) {
            creep.say('harvesting')
            var sources = creep.room.find(FIND_SOURCES)
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }}
            /* else {
            var construction = creep.room.find(FIND_CONSTRUCTION_SITES)
            if(construction.length > 0) {
                if(creep.build(construction[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(construction[0]);
                }
            } else {
                var containers = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure => {
                        return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] < structure.storeCapacity
                    })
                })
                if(containers.length > 0) {
                if(creep.transfer(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers[0]);
                }
            }
            }
        }*/
    }
    
};
if (creep.memory.builder) {
    creep.say('building')
    var construction = creep.room.find(FIND_CONSTRUCTION_SITES)
            if(construction.length > 0) {
                if(creep.build(construction[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(construction[0]);
                }
            } else {
                var containers = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure => {
                        return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] < structure.storeCapacity
                    })
                })
                if(containers.length > 0) {
                if(creep.transfer(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers[0]);
                }
            }
            }
}

module.exports = roleBuilder;
