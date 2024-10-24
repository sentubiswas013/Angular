// Treemap.js
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import play from "./play.png";
const data = { "name": "Advertisers", "range": 90, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "Self Serve", "range": 70, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "Campaign", "range": 88, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "SS_Campaign_Auction", "range": 60, "pass": 40, "fail": 50, "total": 90,  "children": [] } ] }, { "name": "Line Item", "range": 86, "children": [ { "name": "Auction", "range": 30, "children": [ { "name": "Contextual", "range": 90, "pass": 40, "fail": 50, "total": 90, }, { "name": "Keyword", "range": 72, "pass": 40, "fail": 50, "total": 90, }, { "name": "Run of Site", "range": 87, "pass": 40, "fail": 50, "total": 90, }, { "name": "Audience", "range": 46, "pass": 40, "fail": 50, "total": 90, } ] } ] } ] }, { "name": "Managed Serve", "range": 85, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "Campaign", "range": 55, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "MS Auction", "range": 31, "pass": 40, "fail": 50, "total": 90, }, { "name": "MS Sponsorship", "range": 72, "pass": 40, "fail": 50, "total": 90, }, { "name": "MS Remnant", "range": 72, "pass": 40, "fail": 50, "total": 90, } ] }, { "name": "Line Item", "range": 93, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "Auction", "range": 81, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "Contextual", "range": 31, "pass": 40, "fail": 50, "total": 90, }, { "name": "Keyword", "range": 72, "pass": 40, "fail": 50, "total": 90, }, { "name": "Run of Site", "range": 87, "pass": 40, "fail": 50, "total": 90, }, { "name": "Audience", "range": 72, "pass": 40, "fail": 50, "total": 90, } ] }, { "name": "Sponsorship", "range": 90, "pass": 40, "fail": 50, "total": 90, "children": [ { "name": "Feature", "range": 31, "pass": 40, "fail": 50, "total": 90, }, { "name": "CATTO - Category Takeover", "range": 95, "pass": 40, "fail": 50, "total": 90, }, { "name": "Keyword Takeover", "range": 95, "pass": 40, "fail": 50, "total": 90, }, { "name": "Gallery", "range": 72, "pass": 40, "fail": 50, "total": 90, } ] } ] } ] } ] }

function Treemap({ width, height }) {
  const svgRef = useRef();

  useEffect(() => {
    // Create the SVG container, a layer for the links and a layer for the nodes.
      const svg = d3.select(svgRef.current)
          .attr("width", width)
          .attr("height", height)
          .style("border", "1px solid red");

          return () => {
            // Cleanup on component unmount
             svg.selectAll("*").remove();
          };
  }, [width, height]);

  useEffect(() => {
      draw();
  }, [data]);

const draw = () => {
    const width = 1600;
    const marginTop = 10;
    const marginRight = 10;
    const marginBottom = 10;
    const marginLeft = 40;
    const rectWidth = 200;

    const root = d3.hierarchy(data);
    const dx = 60;
    const dy = (width - marginRight - marginLeft) / (1 + root.height);

    const tree = d3.tree().nodeSize([dx, dy]);
    const diagonal = d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", dx)
      .attr("viewBox", [-marginLeft, -marginTop, width, dx])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;");

    const gLink = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5);

    const gNode = svg.append("g")
      .attr("cursor", "pointer")
      .attr("pointer-events", "all");

    function update(event, source) {
      const duration = event?.altKey ? 2500 : 250;
      const nodes = root.descendants().reverse();
      const links = root.links();

      tree(root);

      let left = root;
      let right = root;
      root.eachBefore(node => {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
      });

      const height = right.x - left.x + marginTop + marginBottom;

      const transition = svg.transition()
        .duration(duration)
        .attr("height", height)
        .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
        .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

      const node = gNode.selectAll("g")
        .data(nodes, d => d.id);

      const nodeEnter = node.enter().append("g")
        .attr("transform", d => `translate(${source.y0},${source.x0})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0)
        .on("click", (event, d) => {
          d.children = d.children ? null : d._children;
          update(event, d);
        });

      nodeEnter.append("circle")
        .attr("cx", 210)
        .attr("r", 2.5)
        .attr("fill", d => d._children ? "#555" : "#fff")
        .attr("stroke-width", 10)
        .style("cursor", "pointer")
        .on('click', toggleChildren); 

      nodeEnter.append('rect')
        .attr('width', rectWidth)
        .attr('height', 36)
        .attr('y', -1 * (36 / 2))
        .attr('x', 0) // Starting x position of the rectangle
        .style('opacity', 1)
        .attr('rx', 3)
        .style('fill', (d) => d.data.range > 85 ? '#ff9b9b' : '#afe1af')
        .style("stroke-width", 1)
        .style('stroke', (d) =>
          (d.data._children !== undefined && d.data.children.length > 0 ? '#333333' : ' ')
        )
        .style("white-space", "nowrap")
        .style("overflow", "hidden")
        .style("text-overflow", "ellipsis")
        .style("cursor", "default")

      nodeEnter.append("text")
        .attr("dy", "0.31em")
        .attr("x", rectWidth / 12 + 1) // Adjusting x position for text
        .text(d => d.data.name)
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .attr("paint-order", "stroke");

      // Section for insert image 
      nodeEnter.append('image')
        .attr('xlink:href', play)
        .attr('width', 10)
        .attr('height', 10)
        .attr("x", 180)
        .attr("y", -5)
        .style("cursor", "pointer")
        .on('click', playButton);

      const nodeUpdate = node.merge(nodeEnter).transition(transition)
        .attr("transform", d => `translate(${d.y},${d.x})`)
        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

      const nodeExit = node.exit().transition(transition).remove()
        .attr("transform", d => `translate(${source.y},${source.x})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0);

      const link = gLink.selectAll("path")
        .data(links, d => d.target.id);

      const linkEnter = link.enter().append("path")
        .attr("d", d => {
          const o = { x: source.x0, y: source.y0 + rectWidth }; // Starting position at the end of the rectangle
          return diagonal({ source: o, target: o });
        });

      link.merge(linkEnter).transition(transition)
        .attr("d", d => {
          const o = { x: d.source.x, y: d.source.y + rectWidth };
          return diagonal({ source: o, target: d.target });
        });

      link.exit().transition(transition).remove()
        .attr("d", d => {
          const o = { x: source.x, y: source.y + rectWidth };
          return diagonal({ source: o, target: o });
        });

      root.eachBefore(d => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Toggle children on click.
      function toggleChildren(event, d) {
        console.log("toggleChildren----", d, "=====", event)
      }

      // Toggle children on click.
      function playButton(event, d) {
        console.log("playButton------")
      }
    }

    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
      if (d.depth && d.data.name.length !== 7) d.children = null;
    });

    update(null, root);
  }

  return (
    <svg ref={svgRef}></svg>
    // <div className="chart">
    //     <svg ref={svgRef}></svg>
    // </div>
  );
}

export default Treemap;