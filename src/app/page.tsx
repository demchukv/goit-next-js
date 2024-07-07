import ActiveLabel from "./components/active-label";
import NotActiveLabel from "./components/not-active-label";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ActiveLabel>Active label</ActiveLabel>
      <NotActiveLabel>Not active label</NotActiveLabel>
    </main>
  );
}
