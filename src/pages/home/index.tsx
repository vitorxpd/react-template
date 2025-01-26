import { useStore } from '@/store';

export function Home() {
  const { count, increment } = useStore((state) => state.counter);
  return (
    <main>
      <h1>Home Page</h1>

      <div>
        <button
          className="cursor-pointer rounded-lg bg-gray-100 px-2 py-1"
          onClick={increment}
        >
          Counter - {count}
        </button>
      </div>
    </main>
  );
}
