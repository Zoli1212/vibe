import { useTRPC } from "@/trpc/client";
import { dehydrate, HydrationBoundary, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {

  const trpc = useTRPC()
  const queryClient = useQueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<p>Loading...</p>}>
  
    </Suspense>
    </HydrationBoundary>
  );
}
