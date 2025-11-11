import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Button asChild>
        <Link href="/" className="text-lg">
          Go back to the home page
        </Link>
      </Button>
    </div>
  );
};
export default NotFound;
