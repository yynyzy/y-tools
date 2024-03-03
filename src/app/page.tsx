
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <section>
        { children }
      </section>
    </main>
  );
}
