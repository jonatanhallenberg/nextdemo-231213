"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";


export const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(queryClient);


  client.setDefaultOptions({
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  })

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}

