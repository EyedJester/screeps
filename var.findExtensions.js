var findExtensions = {
    
    run: function(spawn) {
        try {
            
                
            RoomObject.prototype.findExtensions = function () {
                var targets = this.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType === STRUCTURE_EXTENSION)
                    }
                return targets.length;
            }
        }
        catch (err) {
            
            console.log('Keep on moving! (findExtensions) ' + err)
            
        }
        
    }
    
};

module.exports = findExtensions;
