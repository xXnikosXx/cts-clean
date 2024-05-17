"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageChanger() {
  return (
    <Select>
      <SelectTrigger className="w-[60px] border-0">
        <SelectValue placeholder="en" />
      </SelectTrigger>
      <SelectContent className="z-50 bg-p-neutral-black">
        <SelectGroup>
          <SelectLabel>Locales</SelectLabel>
          <SelectItem value="en">en</SelectItem>
          <SelectItem value="el">el</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
