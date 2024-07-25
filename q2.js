const findNearestNode = (nodeDistance, nodeVisited) => {
    let nodesCount = nodeDistance.length;
    let min = Number.MAX_VALUE;
    let minIndex = -1;

    for(let i = 0; i < nodesCount; i++) {
        if(!nodeVisited[i] && nodeDistance[i] <= min) {
            min = nodeDistance[i];
            minIndex = i;
        }
    }
    return minIndex;
};

const findShortestPath = (graphDict, nodesCount, sourceVertex) => {
    let graph = new Array(nodesCount).fill().map(() => new Array(nodesCount).fill(0));

    for(let i = 0; i < nodesCount; i++) {
        for(let j = 0; j < nodesCount; j++) {
            if(graphDict[i][j] < 0) {
                return null;
            }
            if(graphDict[i][j] === null) {
                continue;
            }
            graph[i][j] = graphDict[i][j]
        }
    }

    let nodeDistance = new Array(nodesCount).fill(Number.MAX_VALUE);
    let nodeVisited = new Array(nodesCount).fill(false);

    nodeDistance[sourceVertex] = 0;

    for(let i = 0; i < nodesCount - 1; i++) {
        const nearestNode = findNearestNode(nodeDistance, nodeVisited);
        nodeVisited[nearestNode] = true;

        for(let j = 0; j < nodesCount; j++) {
            if(
                !nodeVisited[j] && 
                graph[nearestNode][j] != 0 && 
                graph[nearestNode][j] != Number.MAX_VALUE && 
                nodeDistance[nearestNode] + graph[nearestNode][j] < nodeDistance[j]
            ) {
                nodeDistance[j] = nodeDistance[nearestNode] + graph[nearestNode][j];
            }
        }
    }

    return nodeDistance;
};



// Driver
/*      
 *  0---4---1
 *  |     / |
 *  1   2   1
 *  | /     |
 *  2---5---3
 *
 *
*/
const nodesCount = 4;
const graphDict = {0: {1: 4, 2: 1}, 1: {3: 1}, 2: {1: 2, 3: 5}, 3: {}};
const src = 0;

const shortestPath = findShortestPath(graphDict, nodesCount, src);
if(shortestPath === null) {
    console.log("Distance between nodes cannot be <= 0");
} else {
    console.log("Graph: " + JSON.stringify(graphDict));
    console.log("Source Vertex: " + src);
    console.log(shortestPath);
}