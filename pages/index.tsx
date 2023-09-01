import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex p-12">
      <Button>Click me</Button>
      <Button variant="cta" className="ml-5">
        Click me
      </Button>
    </main>
  );
}
