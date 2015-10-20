# randomDag

Generate random directed acyclic graphs in JSON

## randomDag

Params:

* numNodes => Number of nodes in the DAG
* edgePct => Percent [0, 100] chance of any two nodes being connected 

Returns:

An array of objects with the form  ``{ source: [integer], target: [integer] }`` where ``source`` and ``target`` are the indices [0, numNodes) of the adjacent nodes.
