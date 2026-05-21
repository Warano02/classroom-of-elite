"use client";

import { useEffect, useState } from "react";

import { Classe } from "@/types/classe";
import {
    getClasses,
    saveClasses,
} from "@/lib/storage";

export function useClasses() {
    const [classes, setClasses] = useState<Classe[]>([]);

    useEffect(() => {
        const storedClasses = getClasses();

        if (storedClasses.length > 0) {
        setClasses(storedClasses);
        } 
        
    }, []);

    return {
        classes,
        setClasses,
    };
}