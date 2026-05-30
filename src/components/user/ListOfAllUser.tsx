"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

interface Student {
  _id: string;
  matricule: string;
  name: string;
  email: string;
}

function ListOfAllUsers() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const getStudents = async () => {
      const { data } = await axios.get("/student");

      setStudents(data);
    };

    getStudents();
  }, []);

  return (
    <div>
      {students.map((student) => (
        <div key={student._id}>
          <h1>{student.matricule}</h1>
          <p>{student.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ListOfAllUsers;
