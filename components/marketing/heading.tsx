"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          "A cluttered mind leads to a cluttered life."
        </h3>
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold">
          Organise your thoughts with <span style={{ color: '#FF8C00' }}>marble</span>.
        </h1>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
        <Button size="lg" style={{ backgroundColor: '#FF8C00', color: 'inherit', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Sign up for marble
        </Button>
      </SignUpButton>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild style={{ backgroundColor: '#FF8C00', color: 'inherit', fontWeight: 'bold', fontSize: '1.1rem' }}>
        <Link href="/documents">
          Check out your notes!
        </Link>
      </Button>
      )}
    </div>
  );
};
