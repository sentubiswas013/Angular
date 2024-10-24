import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Treemap({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(svgRef.current);

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const treeLayout = d3.tree().size([height, width - 200]);

    const root = d3.hierarchy(data);
    treeLayout(root);

    const g = svg.append('g').attr('transform', 'translate(100,0)');

    const link = g
      .selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal().x(d => d.y).y(d => d.x));

    const node = g
      .selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`);

    node.append('circle').attr('r', 7);

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', d => (d.children ? -13 : 13))
      .style('text-anchor', d => (d.children ? 'end' : 'start'))
      .text(d => d.data.name);

    function click(d) {
      d.children = d.children ? null : d._children;
      update(d);
    }

    function update(source) {
      const duration = d3.event && d3.event.altKey ? 2500 : 250;
      const nodes = root.descendants().reverse();
      const links = root.links();

      treeLayout(root);

      node.data(nodes, d => d.id).transition().duration(duration).attr('transform', d => `translate(${d.y},${d.x})`);
      link.data(links, d => d.target.id).transition().duration(duration).attr('d', d3.linkHorizontal().x(d => d.y).y(d => d.x));
    }

    update(root);
  }, [data]);

  return <svg ref={svgRef} width="600" height="400"></svg>;
}

export default Treemap;
