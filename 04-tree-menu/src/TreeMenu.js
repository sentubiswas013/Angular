import React, { useState } from 'react';
import closeArrow from "./ui/libs/assets/images/close-Arrow.svg";
import openArrow from "./ui/libs/assets/images/open-Arrow.svg";
import iconTrashActive from "./ui/libs/assets/images/icon-trash-active.svg";
import iconAddStepActive from "./ui/libs/assets/images/icon-add-step-active.svg";

// Sample data representing the tree structure
const treeData = [ { id: 1, name: "Advertisers", type : 'folder', isExpanded: true, children: [ { id: 2, name: "Self Serve", type : 'folder', children: [ { id: 3, name: "Campaign", type : 'folder', isDraggable: true, children: [ { id: 4, name: "SS_Campaign_Auction" } ] }, { id: 5, name: "Line Item", type : 'folder', children: [ { id: 6, name: "Auction", type : 'folder', isDraggable: true, children: [ { id: 7, name: "Contextual" }, { id: 8, name: "Keyword" }, { id: 9, name: "Run of Site" }, { id: 10, name: "Audience" } ] } ], isExpanded: true } ], isExpanded: true }, { id: 11, name: "Managed Serve", type : 'folder', children: [ { id: 12, name: "Campaign", type : 'folder', isDraggable: true, children: [ { id: 13, name: "MS Auction" }, { id: 14, name: "MS Sponsorship" }, { id: 15, name: "MS Remnant" } ] }, { id: 16, name: "Line Item", type : 'folder', children: [ { id: 17, name: "Auction", type : 'folder', isDraggable: true, children: [ { id: 18, name: "MS Auction" }, { id: 19, name: "MS Sponsorship" }, { id: 110, name: "MS Remnant" } ] } ], isExpanded: true } ], isExpanded: true } ] } ];

// Recursive component to render each node of the tree
const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggle} className='treeMenu' style={{ cursor: 'pointer' }}>       
        { node.children && (
          <span>
            {
                isExpanded ? 
                <img src={openArrow} alt="arrow" title="logo" width="18" /> : 
                <img src={closeArrow} alt="arrow" title="logo" width="18" />
            } 
          </span>
        )}
         {node.name}          
         <img src={iconAddStepActive} alt="arrow" title="logo" width="18" />
         <img src={iconTrashActive} alt="arrow" title="logo" width="18" /> 
      </div>
      {isExpanded && node.children && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} /> 
          ))}
        </div>
      )}
    </div>
  );
};

// Main component to render the tree
const TreeMenu = () => {
  return (
    <div className='comp2 px-3 py-3'>
      {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeMenu;
