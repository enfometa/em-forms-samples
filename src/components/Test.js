import React from "react";

function Test({ children }) {
  const firstChild = children[0];
  return (
    <React.Fragment>
      {React.cloneElement(firstChild, {})}
      {children}
    </React.Fragment>
  );
}

export default Test;
