import { create } from "zustand";
<<<<<<< HEAD
import { bookmarks as initialBookmarks, type Bookmark } from "@/mock-data/bookmarks";
=======
import { bookmarks as initialBookmarks } from "@/mock-data/bookmarks";
import { Bookmark } from "@/types";
import axiosInstance from "@/lib/axios";
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05

type ViewMode = "grid" | "list";
type SortBy = "date-newest" | "date-oldest" | "alpha-az" | "alpha-za";
type FilterType = "all" | "favorites" | "with-tags" | "without-tags";

interface BookmarksState {
  bookmarks: Bookmark[];
<<<<<<< HEAD
=======
  loading: boolean;
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  archivedBookmarks: Bookmark[];
  trashedBookmarks: Bookmark[];
  selectedCollection: string;
  selectedTags: string[];
  searchQuery: string;
  viewMode: ViewMode;
  sortBy: SortBy;
  filterType: FilterType;
  setSelectedCollection: (collectionId: string) => void;
<<<<<<< HEAD
=======
  fetchCourses: () => Promise<TResponse>;
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  toggleTag: (tagId: string) => void;
  clearTags: () => void;
  setSearchQuery: (query: string) => void;
  setViewMode: (mode: ViewMode) => void;
  setSortBy: (sort: SortBy) => void;
  setFilterType: (filter: FilterType) => void;
  toggleFavorite: (courseId: string) => void;
  archiveBookmark: (courseId: string) => void;
  restoreFromArchive: (courseId: string) => void;
  trashBookmark: (courseId: string) => void;
  restoreFromTrash: (courseId: string) => void;
  permanentlyDelete: (courseId: string) => void;
  getFilteredBookmarks: () => Bookmark[];
<<<<<<< HEAD
  getFavoriteBookmarks: () => Bookmark[];
=======
  getFavoriteBookmarks: () => Promise<Bookmark[]>;
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  getArchivedBookmarks: () => Bookmark[];
  getTrashedBookmarks: () => Bookmark[];
}

<<<<<<< HEAD
export const useBookmarksStore = create<BookmarksState>((set, get) => ({
=======
type TResponse = {
  classroomCourses: Bookmark[];
  continueCourses: Bookmark[];
  recommendedCourses: Bookmark[];
  tags: number;
};

export const useBookmarksStore = create<BookmarksState>((set, get) => ({
  loading: true,
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  bookmarks: initialBookmarks,
  archivedBookmarks: [],
  trashedBookmarks: [],
  selectedCollection: "all",
  selectedTags: [],
  searchQuery: "",
  viewMode: "grid",
  sortBy: "date-newest",
  filterType: "all",

<<<<<<< HEAD
  setSelectedCollection: (collectionId) => set({ selectedCollection: collectionId }),
=======
  fetchCourses: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get<TResponse>("/c");
      set({
        loading: false,
        bookmarks: [
          ...res.data.classroomCourses,
          ...res.data.continueCourses,
          ...res.data.recommendedCourses,
        ],
      });
      return res.data;
    } catch (e) {
      console.log("Error occured while trying to get courses ", e);
      return {
        classroomCourses: [],
        recommendedCourses: [],
        continueCourses: [],
        tags: 0,
      };
    }
  },

  setSelectedCollection: (collectionId) =>
    set({ selectedCollection: collectionId }),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05

  toggleTag: (tagId) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tagId)
        ? state.selectedTags.filter((t) => t !== tagId)
        : [...state.selectedTags, tagId],
    })),

  clearTags: () => set({ selectedTags: [] }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setViewMode: (mode) => set({ viewMode: mode }),

  setSortBy: (sort) => set({ sortBy: sort }),

  setFilterType: (filter) => set({ filterType: filter }),

<<<<<<< HEAD
  toggleFavorite: (courseId) =>
    set((state) => ({
      bookmarks: state.bookmarks.map((bookmark) =>
        bookmark.id === courseId
          ? { ...bookmark, isFavorite: !bookmark.isFavorite }
          : bookmark
      ),
    })),

  archiveBookmark: (courseId) =>
    set((state) => {
      const bookmark = state.bookmarks.find((b) => b.id === courseId);
      if (!bookmark) return state;
      return {
        bookmarks: state.bookmarks.filter((b) => b.id !== courseId),
=======
  toggleFavorite: async (courseId) => {
    set((state) => ({
      bookmarks: state.bookmarks.map((bookmark) =>
        bookmark._id === courseId
          ? { ...bookmark, isFavorite: !bookmark.isFavorite }
          : bookmark,
      ),
    }));

    return axiosInstance.patch(`/u/favorites/${courseId}`);
  },

  archiveBookmark: (courseId) =>
    set((state) => {
      const bookmark = state.bookmarks.find((b) => b._id === courseId);
      if (!bookmark) return state;
      return {
        bookmarks: state.bookmarks.filter((b) => b._id !== courseId),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
        archivedBookmarks: [...state.archivedBookmarks, bookmark],
      };
    }),

  restoreFromArchive: (courseId) =>
    set((state) => {
<<<<<<< HEAD
      const bookmark = state.archivedBookmarks.find((b) => b.id === courseId);
      if (!bookmark) return state;
      return {
        archivedBookmarks: state.archivedBookmarks.filter((b) => b.id !== courseId),
=======
      const bookmark = state.archivedBookmarks.find((b) => b._id === courseId);
      if (!bookmark) return state;
      return {
        archivedBookmarks: state.archivedBookmarks.filter(
          (b) => b._id !== courseId,
        ),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
        bookmarks: [...state.bookmarks, bookmark],
      };
    }),

  trashBookmark: (courseId) =>
    set((state) => {
<<<<<<< HEAD
      const bookmark = state.bookmarks.find((b) => b.id === courseId);
      if (!bookmark) return state;
      return {
        bookmarks: state.bookmarks.filter((b) => b.id !== courseId),
=======
      const bookmark = state.bookmarks.find((b) => b._id === courseId);
      if (!bookmark) return state;
      return {
        bookmarks: state.bookmarks.filter((b) => b._id !== courseId),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
        trashedBookmarks: [...state.trashedBookmarks, bookmark],
      };
    }),

  restoreFromTrash: (courseId) =>
    set((state) => {
<<<<<<< HEAD
      const bookmark = state.trashedBookmarks.find((b) => b.id === courseId);
      if (!bookmark) return state;
      return {
        trashedBookmarks: state.trashedBookmarks.filter((b) => b.id !== courseId),
=======
      const bookmark = state.trashedBookmarks.find((b) => b._id === courseId);
      if (!bookmark) return state;
      return {
        trashedBookmarks: state.trashedBookmarks.filter(
          (b) => b._id !== courseId,
        ),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
        bookmarks: [...state.bookmarks, bookmark],
      };
    }),

  permanentlyDelete: (courseId) =>
    set((state) => ({
<<<<<<< HEAD
      trashedBookmarks: state.trashedBookmarks.filter((b) => b.id !== courseId),
=======
      trashedBookmarks: state.trashedBookmarks.filter(
        (b) => b._id !== courseId,
      ),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    })),

  getFilteredBookmarks: () => {
    const state = get();
    let filtered = [...state.bookmarks];

    if (state.selectedCollection !== "all") {
<<<<<<< HEAD
      filtered = filtered.filter((b) => b.collectionId === state.selectedCollection);
=======
      // filtered = filtered.filter(
      //   (b) => b.collectionId === state.selectedCollection,
      // );
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
    }

    if (state.selectedTags.length > 0) {
      filtered = filtered.filter((b) =>
<<<<<<< HEAD
        state.selectedTags.some((tag) => b.tags.includes(tag))
=======
        state.selectedTags.some((tag) => b.tags.includes(tag)),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
      );
    }

    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
<<<<<<< HEAD
          b.description.toLowerCase().includes(query) ||
          b.url.toLowerCase().includes(query)
=======
          b.description.toLowerCase().includes(query),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
      );
    }

    switch (state.filterType) {
      case "favorites":
        filtered = filtered.filter((b) => b.isFavorite);
        break;
      case "with-tags":
        filtered = filtered.filter((b) => b.tags.length > 0);
        break;
      case "without-tags":
        filtered = filtered.filter((b) => b.tags.length === 0);
        break;
    }

    switch (state.sortBy) {
      case "date-newest":
<<<<<<< HEAD
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "date-oldest":
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
=======
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "date-oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
        break;
      case "alpha-az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alpha-za":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
  },

<<<<<<< HEAD
  getFavoriteBookmarks: () => {
    const state = get();
    let filtered = state.bookmarks.filter((b) => b.isFavorite);

    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.description.toLowerCase().includes(query) ||
          b.url.toLowerCase().includes(query)
      );
    }

    switch (state.sortBy) {
      case "date-newest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "date-oldest":
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case "alpha-az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alpha-za":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
=======
  getFavoriteBookmarks: async () => {
    try {
      set((state) => ({ ...state, loading: true }));

      const state = get();
      let filtered = state.bookmarks.filter((b) => b.isFavorite);
      const {
        data: { courses },
      } = await axiosInstance.get<{ courses: Bookmark[] }>(
        "/u/collections/sys/favorites",
      );
      set((state) => ({ ...state, bookmarks: courses }));
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (b) =>
            b.title.toLowerCase().includes(query) ||
            b.description.toLowerCase().includes(query),
        );
      }

      switch (state.sortBy) {
        case "date-newest":
          filtered.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
          break;
        case "date-oldest":
          filtered.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          );
          break;
        case "alpha-az":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "alpha-za":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }

      return filtered;
    } catch (e) {
      return [];
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
  },

  getArchivedBookmarks: () => {
    const state = get();
    let filtered = [...state.archivedBookmarks];

    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
<<<<<<< HEAD
          b.description.toLowerCase().includes(query) ||
          b.url.toLowerCase().includes(query)
=======
          b.description.toLowerCase().includes(query),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
      );
    }

    return filtered;
  },

  getTrashedBookmarks: () => {
    const state = get();
    let filtered = [...state.trashedBookmarks];

    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
<<<<<<< HEAD
          b.description.toLowerCase().includes(query) ||
          b.url.toLowerCase().includes(query)
=======
          b.description.toLowerCase().includes(query),
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
      );
    }

    return filtered;
  },
}));
