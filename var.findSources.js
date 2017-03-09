var findSources = {
    run: function findSources(creep, where) {
    try {
    where = creep.room.find(FIND_SOURCES).map(function(s){ return s.pos; });
    console.log(where);
    }
    catch (err) {
        console.log("You're a failure. " + err)
    }
    }
}
module.exports = findSources;
