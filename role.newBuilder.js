var roleBuilder = {
    run: function(creep, x) {
        try {
        if (creep.carry.energy === 0) { creep.memory.x = true }
        if (creep.carry.energy === creep.carryCapacity) { creep.memory.x = false }
        
        if ( creep.memory.x === true ) {
            var sources = creep.room.find(FIND_SOURCES)
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        
        if ( creep.memory.x === false ) {

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
                
                
            } else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.energy < structure.energyCapacity // || structure.storeCapacity > structure.storeCapacity ;
                    }
            });
            
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0])
            }
            }
            
            }
        }
        }
        catch(err) {
        creep.say('Real smooth.')
        }
        }
    };


module.exports = roleBuilder;
