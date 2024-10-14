import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5">
      <Button variant="destructive" size="lg">
        Click Here
      </Button>
    </div>
  );
}
