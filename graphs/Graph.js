//undirected graph with adjacency list

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexId) {
        if(!vertexId || this.adjacencyList.vertexId) return;

        this.adjacencyList[vertexId] = [];

        console.log('add vertex', this.adjacencyList);
    }

    addEdge(vertexName1, vertexName2) {
        if(!this.adjacencyList[vertexName1]) this.addVertex(vertexName1);
        if(!this.adjacencyList[vertexName2]) this.addVertex(vertexName2);

        const vertex1 = this.adjacencyList[vertexName1],
              vertex2 = this.adjacencyList[vertexName2];

        if(!vertex1.includes(vertexName2)) {
            vertex1.push(vertexName2);
            vertex2.push(vertexName1);
        }

        console.log('add edge', this.adjacencyList);
    }

    removeEdge(vertexName1, vertexName2) {
        let vertex1 = this.adjacencyList[vertexName1],
            vertex2 = this.adjacencyList[vertexName2];

        if(vertex1 && vertex2) {
            this.adjacencyList[vertexName1] = vertex1.filter(el => el !== vertexName2);
            this.adjacencyList[vertexName2] = vertex2.filter(el => el !== vertexName1);
        }

        console.log('remove edge', this.adjacencyList);
    }

    removeVertex(vertexName) {
        if(!this.adjacencyList[vertexName]) return;

        while(this.adjacencyList[vertexName].length) {
            const adjacentVertex = this.adjacencyList[vertexName].pop();

            this.removeEdge(vertexName, adjacentVertex);
        }

        delete this.adjacencyList[vertexName];

        console.log('remove vertex', this.adjacencyList);
    }

    // removeVertex(vertexName) {
    //     if(!this.adjacencyList[vertexName]) return;

    //     delete this.adjacencyList[vertexName];

    //     for(const vertex in this.adjacencyList) {
    //         const deletedVertexIndex = this.adjacencyList[vertex].indexOf(vertexName);

    //         if(deletedVertexIndex !== -1) {
    //             this.adjacencyList[vertex].splice(deletedVertexIndex, 1);
    //         }
    //     }

    //     console.log('remove vertex', this.adjacencyList);
    // }
}

const graph = new Graph();

graph.addVertex('first');
graph.addVertex('second');
graph.addVertex('third');
graph.addVertex('fourth');
graph.addEdge('third', 'fourth');
graph.addEdge('first', 'second');
graph.removeEdge('first', 'second');
graph.removeVertex('first');

