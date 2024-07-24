'use client'

import Tiptap from "@/components/Editor";
import ShareButtonGroup from "@/components/ShareButtons";
import SidebarPanel from "@/components/SidebarPanel";
import { Sidebar } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main>
      <div className="">
        <SidebarPanel />
        <div>
        <Tiptap />
        <ShareButtonGroup />
        </div>
      </div>
    </main>
  );
};

export default Page;
