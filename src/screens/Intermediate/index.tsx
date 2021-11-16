import React from "react";

import { HomePage } from "../../components/HomePage";

import { intermediate } from "../../utils/levelsApps";

export function Intermediate() {
  return (
    <>
      <HomePage title="Intermediate" data={intermediate} />
    </>
  );
}
