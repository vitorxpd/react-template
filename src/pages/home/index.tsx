import { Button } from '@/common/components/button';
import { useStore } from '@/store';

export function Home() {
  const { count, increment } = useStore((state) => state.counter);

  return (
    <div>
      <h1>Home Page</h1>

      <Button
        className="cursor-pointer rounded-lg bg-gray-100 px-2 py-1"
        onClick={increment}
      >
        Counter - {count}
      </Button>
    </div>
  );
}
