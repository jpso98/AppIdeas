import React from "react";

import { HomePage } from "../../components/HomePage";

import { advanced } from "../../utils/levelsApps";

export function Advanced() {
  return (
    <>
      <HomePage title="Advanced" data={advanced} />
    </>
  );
}
