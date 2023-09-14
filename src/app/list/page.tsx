"use client";

import { Box } from "@mui/material";
import { useState, useCallback } from "react";

interface Tags {
  id: number;
  name: string;
  selected: boolean;
}

const List = () => {
  const [tags, setTags] = useState<Tags[]>([
    { id: 1, name: "전체", selected: true },
    { id: 2, name: "가슴", selected: false },
    { id: 3, name: "등", selected: false },
    { id: 4, name: "하체", selected: false },
  ]);

  const tapChange = useCallback(
    (id: number) => {
      const changeTag = [...tags];

      changeTag.forEach((tag) => {
        tag.selected = false;
      });

      const selectedTag = changeTag.find((tag) => tag.id === id);
      if (selectedTag) {
        selectedTag.selected = true;
      }

      setTags(changeTag);
    },
    [tags]
  );

  return (
    <div className="bg-gradient-to-b from-[#D6E7FF] via-[#C2F0FF] pb-16">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <span className="text-2xl text-[#638FFF]">K</span>
          <span className="text-2xl">-jobs</span>
        </div>
        <Box className="text-white" />
      </div>
      <div className="flex justify-end pr-10 items-center">
        <div className="bg-[#4E7AAE] text-white text-sm px-4 py-1 mr-3 rounded-2xl"></div>
        <div className="text-3xl"></div>
        <span className="mt-2 ml-1"></span>
      </div>
      <div className="flex justify-around mt-5">
        {tags.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex items-center justify-center rounded-t-xl ${
                item.selected
                  ? "bg-white text-black"
                  : "bg-[#4E7AAE] text-white"
              } w-full h-10`}
              onClick={() => {
                tapChange(item.id);
              }}
            >
              <div className="text-sm">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
