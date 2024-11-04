import { TextField } from "@mui/material";
import React from "react";

const BetfairSettingComponent = () => {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-[60%] gap-[15px] flex justify-start items-center">
        <p className="w-[180px] font-bold">Load events for next</p>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          className="w-[110px]"
        />
        <p className="w-[180px] font-bold">minutes</p>
      </div>
      <div className="w-[60%] gap-[15px] flex justify-start items-center">
        <p className="w-[180px] font-bold">Refresh interval</p>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          className="w-[110px]"
        />
        <p className="w-[180px] font-bold">minutes</p>
      </div>
    </div>
  );
};

export default BetfairSettingComponent;