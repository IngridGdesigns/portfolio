import React from "react";
import { ProjectProps } from "../page";

export function Hello({ projects }: ProjectProps) {
  const project = projects[0];
 
  return (
    <div className="hello">
      <div className="greeting">
        Hello {project.title} {project.id}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

/*
import React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
*/