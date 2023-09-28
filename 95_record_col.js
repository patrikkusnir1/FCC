// Record collection

const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let it Rock", "You Give Love a Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

//  The updateRecords function takes 4 arguments represented by the following function parameters:
function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop]
    }
    else if (prop !== "tracks" && value != "") {
        records[id][prop] = value;
    }
    else if (prop === "tracks" && value != "") {
        records[id][prop] = records[id][prop] || []; // ensure property exists as an array, if not, add empty
        records[id][prop].push(value)
    } 
    return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take A Chance on Me");
console.log(recordCollection)