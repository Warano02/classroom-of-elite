// src/mock-data/student-data.ts
import {
  Cpu,
  Database,
  Globe,
  Network,
  Settings2,
  Wrench,
  BrainCircuit,
  Sigma,
  type LucideIcon,
} from "lucide-react";

export type SubjectCategory =
  | "Algorithmique"
  | "Base de données"
  | "Développement Web"
  | "Réseaux"
  | "Système d'exploitation"
  | "Génie logiciel"
  | "Intelligence Artificielle"
  | "Mathématiques";

export type ExamType = "Examen" | "CC" | "TP";

export interface Subject {
  id: string;
  name: string;
  code: string;
  category: SubjectCategory;
  credits: number;
  teacher: string;
  progress: number;
  nextSession?: string;
  color: string;
  iconColor: string;
  Icon: LucideIcon;
}

export interface ExamFile {
  id: string;
  title: string;
  subject: string;
  subjectCode: string;
  type: ExamType;
  year: string;
  semester: "S1" | "S2";
  pages: number;
  hasCorrection: boolean;
  downloadUrl: string;
}

export const subjects: Subject[] = [
  {
    id: "algo",
    name: "Algorithmique Avancée",
    code: "INF301",
    category: "Algorithmique",
    credits: 6,
    teacher: "Prof. Nganou",
    progress: 72,
    nextSession: "Lun 14h00",
    color: "bg-violet-500/10",
    iconColor: "text-violet-500",
    Icon: Cpu,
  },
  {
    id: "bdd",
    name: "Base de Données Avancées",
    code: "INF302",
    category: "Base de données",
    credits: 5,
    teacher: "Prof. Bello",
    progress: 45,
    nextSession: "Mar 10h00",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    Icon: Database,
  },
  {
    id: "web",
    name: "Ingénierie Web",
    code: "INF303",
    category: "Développement Web",
    credits: 6,
    teacher: "Prof. Kamga",
    progress: 88,
    nextSession: "Mer 08h00",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    Icon: Globe,
  },
  {
    id: "reseau",
    name: "Réseaux & Protocoles",
    code: "INF304",
    category: "Réseaux",
    credits: 5,
    teacher: "Prof. Adamou",
    progress: 30,
    nextSession: "Jeu 14h00",
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
    Icon: Network,
  },
  {
    id: "sys",
    name: "Systèmes d'Exploitation",
    code: "INF305",
    category: "Système d'exploitation",
    credits: 4,
    teacher: "Prof. Fouda",
    progress: 60,
    nextSession: "Ven 10h00",
    color: "bg-rose-500/10",
    iconColor: "text-rose-500",
    Icon: Settings2,
  },
  {
    id: "gl",
    name: "Génie Logiciel",
    code: "INF306",
    category: "Génie logiciel",
    credits: 4,
    teacher: "Prof. Mbida",
    progress: 55,
    nextSession: "Lun 10h00",
    color: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    Icon: Wrench,
  },
  {
    id: "ia",
    name: "Intelligence Artificielle",
    code: "INF307",
    category: "Intelligence Artificielle",
    credits: 5,
    teacher: "Prof. Ngono",
    progress: 20,
    nextSession: "Mar 14h00",
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    Icon: BrainCircuit,
  },
  {
    id: "math",
    name: "Mathématiques pour l'Informatique",
    code: "MAT301",
    category: "Mathématiques",
    credits: 4,
    teacher: "Prof. Abbo",
    progress: 65,
    color: "bg-pink-500/10",
    iconColor: "text-pink-500",
    Icon: Sigma,
  },
];

export const examFiles: ExamFile[] = [
  {
    id: "e1", title: "Examen Final — Algorithmique",
    subject: "Algorithmique Avancée", subjectCode: "INF301",
    type: "Examen", year: "2024", semester: "S1", pages: 4,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "e2", title: "Examen Final — Base de Données",
    subject: "Base de Données Avancées", subjectCode: "INF302",
    type: "Examen", year: "2024", semester: "S1", pages: 3,
    hasCorrection: false, downloadUrl: "#",
  },
  {
    id: "e3", title: "Examen Final — Ingénierie Web",
    subject: "Ingénierie Web", subjectCode: "INF303",
    type: "Examen", year: "2023", semester: "S2", pages: 5,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "e4", title: "Examen Final — Réseaux",
    subject: "Réseaux & Protocoles", subjectCode: "INF304",
    type: "Examen", year: "2023", semester: "S1", pages: 4,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "e5", title: "Examen Final — Systèmes d'Exploitation",
    subject: "Systèmes d'Exploitation", subjectCode: "INF305",
    type: "Examen", year: "2024", semester: "S2", pages: 3,
    hasCorrection: false, downloadUrl: "#",
  },
  {
    id: "c1", title: "CC1 — Algorithmique",
    subject: "Algorithmique Avancée", subjectCode: "INF301",
    type: "CC", year: "2024", semester: "S1", pages: 2,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "c2", title: "CC2 — Base de Données",
    subject: "Base de Données Avancées", subjectCode: "INF302",
    type: "CC", year: "2024", semester: "S1", pages: 2,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "c3", title: "CC1 — Ingénierie Web",
    subject: "Ingénierie Web", subjectCode: "INF303",
    type: "CC", year: "2024", semester: "S2", pages: 2,
    hasCorrection: false, downloadUrl: "#",
  },
  {
    id: "c4", title: "CC1 — Réseaux",
    subject: "Réseaux & Protocoles", subjectCode: "INF304",
    type: "CC", year: "2023", semester: "S1", pages: 1,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "c5", title: "CC2 — Génie Logiciel",
    subject: "Génie Logiciel", subjectCode: "INF306",
    type: "CC", year: "2024", semester: "S1", pages: 2,
    hasCorrection: false, downloadUrl: "#",
  },
  {
    id: "t1", title: "TP1 — Tri et Recherche",
    subject: "Algorithmique Avancée", subjectCode: "INF301",
    type: "TP", year: "2024", semester: "S1", pages: 3,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "t2", title: "TP2 — Modélisation UML",
    subject: "Génie Logiciel", subjectCode: "INF306",
    type: "TP", year: "2024", semester: "S1", pages: 4,
    hasCorrection: false, downloadUrl: "#",
  },
  {
    id: "t3", title: "TP1 — Requêtes SQL avancées",
    subject: "Base de Données Avancées", subjectCode: "INF302",
    type: "TP", year: "2024", semester: "S2", pages: 3,
    hasCorrection: true, downloadUrl: "#",
  },
  {
    id: "t4", title: "TP1 — Configuration Réseau",
    subject: "Réseaux & Protocoles", subjectCode: "INF304",
    type: "TP", year: "2023", semester: "S1", pages: 5,
    hasCorrection: false, downloadUrl: "#",
  },
  {
    id: "t5", title: "TP2 — API REST avec Node.js",
    subject: "Ingénierie Web", subjectCode: "INF303",
    type: "TP", year: "2024", semester: "S2", pages: 6,
    hasCorrection: true, downloadUrl: "#",
  },
];

export const studentStats = {
  name: "Varel F",
  level: "L3 Informatique",
  totalCredits: 39,
  earnedCredits: 24,
  averageProgress: Math.round(
    subjects.reduce((acc, s) => acc + s.progress, 0) / subjects.length
  ),
  totalSubjects: subjects.length,
  upcomingSessions: subjects.filter((s) => s.nextSession).length,
};

export interface ScheduledCC {
  id: string;
  title: string;
  subject: string;
  subjectCode: string;
  teacher: string;
  deadline: Date;       // date limite pour composer
  duration: number;     // durée en minutes
  totalQuestions: number;
}

export const scheduledCCs: ScheduledCC[] = [
  {
    id: "cc-live-1",
    title: "CC2 — Algorithmique Avancée",
    subject: "Algorithmique Avancée",
    subjectCode: "INF301",
    teacher: "Prof. Nganou",
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 48), // dans 48h
    duration: 60,
    totalQuestions: 20,
  },
  {
    id: "cc-live-2",
    title: "CC1 — Ingénierie Web",
    subject: "Ingénierie Web",
    subjectCode: "INF303",
    teacher: "Prof. Kamga",
    deadline: new Date(Date.now() + 1000 * 60 * 90), // dans 1h30
    duration: 45,
    totalQuestions: 15,
  },
  {
    id: "cc-live-3",
    title: "CC3 — Base de Données",
    subject: "Base de Données Avancées",
    subjectCode: "INF302",
    teacher: "Prof. Bello",
    deadline: new Date(Date.now() - 1000 * 60 * 60 * 2), // dépassé (il y a 2h)
    duration: 60,
    totalQuestions: 25,
  },
  {
    id: "cc-live-4",
    title: "CC1 — Réseaux & Protocoles",
    subject: "Réseaux & Protocoles",
    subjectCode: "INF304",
    teacher: "Prof. Adamou",
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // dans 3 jours
    duration: 90,
    totalQuestions: 30,
  },
  {
    id: "cc-live-5",
    title: "CC2 — Systèmes d'Exploitation",
    subject: "Systèmes d'Exploitation",
    subjectCode: "INF305",
    teacher: "Prof. Fouda",
    deadline: new Date(Date.now() - 1000 * 60 * 60 * 24), // dépassé (hier)
    duration: 60,
    totalQuestions: 20,
  },
];