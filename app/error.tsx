"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
     <h1 className="text-xl font-medium" style={{ fontSize: '26px' }}>
  Oops! Something unexpected happened.
</h1>

      <Button asChild style={{ backgroundColor: '#FF8C00', color: 'inherit' , fontWeight:'bold'}}>
  <Link href="/documents">Go back</Link>
</Button>

    </div>
  );
}
