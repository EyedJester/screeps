var roleTransfer = {
	
	run: function(creep) {
		
		if (creep.carry.energy) < creep.carryCapacity { creep.memory.done = false }
		if (creep.carry.energy === creep.carryCapacity) { creep.memory.done = true }
		
		if (creep.memory.done === false) { 
			
			var supplies = creep.room.find(FIND_MY_CREEPS, {
				filter: (creep) => {
					return (creep.memory.role === 'harvesters') && (creep.memory.help === true);
				}
			});
			
			creep.moveTo(supplies[0]);
		
		}
		
		if (creep.memory.done === true) {
			
			var refill = creep.room.find(FIND_STRUCTURES, {
				filter: (structure) => {
					return (structure.structureType == STRUCTURE_SPAWN);
				}
			});
			
			if (creep.transfer(refill[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
				creep.moveTo(refill[0])
			}
			
		}
		
	}
	
};

module.exports = roleTransfer;
