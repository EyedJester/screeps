var roleBuilder = {
    //creep.room.visual.line(creep.pos, target.pos, {color: 'red', style: 'dashed'});   TODO: FIX THIS FAILED ATTEMPT.
    run: function(creep, x) {
        try {
        if (creep.carry.energy === 0) { creep.memory.x = true }                         //If the amount of energy the creep is carry equals zero,
        if (creep.carry.energy === creep.carryCapacity) { creep.memory.x = false }      //change the 'x' variable in memory to true. If it's full,
                                                                                        //change it to true.
        
        if ( creep.memory.x === true ) {                                                //If the memory variable x equals true.
            //creep.say(creep.memory.x);
            var sources = creep.room.find(FIND_SOURCES)                                 //See: role.harvester
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        
        if ( creep.memory.x === false ) {
            //creep.say(creep.memory.x)
            
            var construction = creep.room.find(FIND_CONSTRUCTION_SITES)                //Creates an array called 'construction' that
                                                                                       //contains all construction sites.
            
            if(construction.length > 0) {                                              //More than one construction site, move towards it
                if(creep.build(construction[0]) == ERR_NOT_IN_RANGE) {                 //and build.
                    creep.moveTo(construction[0]);
                }
                
            } else {
                
                var containers = creep.room.find(FIND_STRUCTURES, {                    //If none of the above applies, just start filling
                    filter: (structure => {                                            //finding containers that aren't full.
                        return (structure.structureType == STRUCTURE_CONTAINER) && 
                        structure.store[RESOURCE_ENERGY] < structure.storeCapacity
                    })
                })
                
                if(containers.length > 0) {                                            //Fills the found containers.
                                                
                if(creep.transfer(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers[0]);
                }
                
            }
            }
        }
        }
        catch(err) {
        creep.say('Real smooth.')       //Insult quota: Met.
        }
        }
    };


module.exports = roleBuilder;
