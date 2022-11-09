import React from "react";

export interface ButtonProps {
  label: string;
}

const Component = ({ label }: ButtonProps) => {
  return <button>Component</button>
}

export default Component
