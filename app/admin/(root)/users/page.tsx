import ListOfAllfUser from "@/components/user//ListOfAllUser";

function ListOfAllUser() {
  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-6xl mx-auto bg-zinc-900 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Liste des étudiants</h1>

        <ListOfAllUser />
      </div>
    </div>
  );
}

export default ListOfAllUser;
