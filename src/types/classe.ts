export interface Classe {
    id: string;
    name: string;
    description: string;
    slogan?: string;
    image?: string;
    suspendue?: boolean;
    students?: number;
    viewMode: "grid" | "list";
}