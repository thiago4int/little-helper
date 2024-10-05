import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls } from 'react-flow-renderer';

function FlowChart({ events }) {
  const initialNodes = [
    { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 5 } },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const eventNodes = events.map((event, index) => ({
    id: (index + 2).toString(),
    data: { label: `${event.title} - ${new Date(event.time).toLocaleString()}` },
    position: { x: 250, y: (index + 1) * 100 },
  }));

  return (
    <div style={{ height: '500px' }}>
      <ReactFlow
        nodes={nodes.concat(eventNodes)}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowChart;

