import { BookmarksHeader } from "@/components/user/dashboard/header";
import { Metadata } from "next";
import { SystemCollection } from "@/components/user/dashboard/system-collection";

export const metadata: Metadata = {
  title: "Favorite Course - IW",
  description: "View courses that you have seen is more interesting for you "
}
export default function FavoritesPage() {
  return (
    <>
      <BookmarksHeader title="Favorites" />
      <SystemCollection sys="favorites" />
    </>
  );
}

