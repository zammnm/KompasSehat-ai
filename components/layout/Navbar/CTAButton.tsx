import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CTAButton() {
  return (
    <Link href="/chat">
      <Button
        variant="primary"
        className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
      >
        Mulai Chat AI
      </Button>
    </Link>
  );
}