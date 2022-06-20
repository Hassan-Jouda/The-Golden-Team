import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function PreLoader1() {
  return (
    <ReactLoading type={"bars"} color={"#03fc4e"} height={100} width={100} />
  );
}

export default PreLoader1;
