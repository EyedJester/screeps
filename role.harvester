var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) { 	//If what you're currently carrying is less than what you can hold.
            var sources = creep.room.find(FIND_SOURCES); 	//Creates an array called sources that holds the positions of each source.
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) { //If the creep tries to harvest and fails,
                creep.moveTo(sources[0]);			//it will move towards the listed source.
            }
        }
        else {							
            var targets = creep.room.find(FIND_STRUCTURES, {	//Creates an array called 'targets' that holds the positions of
                    filter: (structure) => {			//energy-holding structures.
                        return (structure.structureType == STRUCTURE_EXTENSION //This jumbled mess just
			|| structure.structureType == STRUCTURE_SPAWN 	       //decides what objects are
			|| structure.structureType == STRUCTURE_CONTAINER) &&  //to be put in the 'targets' array.
                        structure.energy < structure.energyCapacity // ||
			structure.storeCapacity > structure.storeCapacity ;
                    }
            });
            if(targets.length > 0) {				//If the targets array holds more than nothing.
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                
		//creep.moveTo(33, 11) Used to make the harvester move to a certain space after being used up. Realized it was inefficient.
		//Might make a variation of it later on.
		
                var containers = creep.room.find(FIND_STRUCTURES, {	       //Creates an array called 'containers'
                    filter: (structure => {				       //that does the exact same thing that
		    							       //'targets' does, except it singles out containers.
									       //Should probably just make a global array called
									       //'targets' at some point instead.
                        return (structure.structureType == STRUCTURE_CONTAINER) && 
			structure.store[RESOURCE_ENERGY] < structure.storeCapacity
                    })
                })
            if(containers.length > 0) { //Aforementioned...
                if(creep.transfer(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers[0]);
                }
            } else {
                creep.moveTo(33, 11);		//Once again, I'll probably end up making a variation of this later on, 
						//because I don't like how inflexible this is.
            }
            }
            
        }
	}
};

module.exports = roleHarvester;
