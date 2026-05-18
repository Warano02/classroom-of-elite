

import { BookmarksHeader } from "@/components/user/dashboard/header";
import { ExamTabs } from "@/components/student/exam/exam/ExamTabs";

// metadata fonctionne uniquement dans les Server Components
export const metadata = {
  title: "Examens & CC — Classroom of Elite",
  description: "Consultez vos sujets et composez vos contrôles continus",
};

export default function ExamPage() {
  return (
    <>
      <BookmarksHeader title="Examens & Évaluations" />
      <div className="flex-1 w-full overflow-auto">
        <div className="p-4 md:p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Examens & Évaluations
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              L3 Informatique · CC programmés et sujets d'examens passés
            </p>
          </div>

          {/* ExamTabs est Client — il gère toute l'interactivité */}
          <ExamTabs />
        </div>
      </div>
    </>
  );
}