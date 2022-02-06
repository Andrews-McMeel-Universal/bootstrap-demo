import React from "react";

const Heading = ({ children, priority }) => {
  const Tag = `h${priority}`;

  return <Tag>{children}</Tag>;
};

export default Heading;
