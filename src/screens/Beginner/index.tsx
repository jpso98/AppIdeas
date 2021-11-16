import React from "react";

import { beginner } from "../../utils/levelsApps";

import { HomePage } from "../../components/HomePage";

export function Beginner() {
  return (
    <>
      <HomePage title="Beginner" data={beginner} />
    </>
  );
}
