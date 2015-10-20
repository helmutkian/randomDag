function randomDag(numNodes, edgePct) {
    var nodeLinks = unfoldRange(1, numNodes, function (i) {
	return unfoldRange(0, i, function (j) {
	    return hasEdge(edgePct) ?  j  : null;
	});
    });

    return nodeLinks
	.map(function (sources, target) {
	    return sources
		.filter(function (source) {
		    return source !== null;
		})
		.map(function (source) {
		    return { source: source, target: target };
		});
	})
	.reduce(function (acc, links) {
	    return acc.concat(links);
	}, []);
}

function unfoldRange(start, end, fn) {
    var arr = [];

    for (var i = start; i < end; i++) {
	arr[i] = fn(i);
    }

    return arr;
}

function hasEdge(edgePct) {
    return getRandom(0, 100) < edgePct;
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;	
}
