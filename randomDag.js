function randomDag(numNodes, edgePct) {
    var adjMatrix = createMatrix(numNodes);

    adjMatrix[0][0] = 0;

    for (var i = 1; i < numNodes; i++) {
	for (var j = 0; j < i; j++) {
	    adjMatrix[i][j] = hasEdge(edgePct) ? 1 : 0;
	}
    }

    console.log("Unconnected:" + getUnconnectedNodes(adjMatrix));
    
    return adjMatrix;
}

function getUnconnectedNodes(adjMatrix) {
    var unconnectedNodes = [];

    adjMatrix.forEach(function (row, i) {
	var hasIncoming = row.some(function (col) { return col;	});
	var hasOutgoing = adjMatrix.slice(i + 1).some(function (row) { return row[i]; });

	if (!hasIncoming && !hasOutgoing) {
	    unconnectedNodes = i;
	}
    });
    
    return unconnectedNodes;
}

function createMatrix(size) {
    var matrix = Array(size);

    for (var i = 0; i < size; i++) {
	matrix[i] = Array(size);
	for (var j = 0; j < size; j++) {
	    matrix[i][j] = 0;
	}
    }

    return matrix;
}

function hasEdge(edgePct) {
    return getRandom(0, 100) < edgePct;
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;	
}

console.log(randomDag(7, 30));
