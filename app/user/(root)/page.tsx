import { BookmarksHeader } from "@/components/user/dashboard/header";
import { BookmarksContent } from "@/components/user/dashboard/content";
import { Suspense } from "react";

export default function BookmarksPage() {
  return (
    <>
      <BookmarksHeader />
        <BookmarksContent />
    
    </>
  );
}

