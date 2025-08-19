import Users, { User } from "@/hooks/useUsers";

export default async function Home() {
  const users: User[] = await Users();

  return (
    <>
      <h1>Tela inicial</h1>
      <div>
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
