"use client";

import { useSession } from "next-auth/react";

export default function Auth() {
  const { data: session } = useSession();

  if (session) {
    return <div>Logged in as: {session?.user?.email}</div>;
  } else {
    return <div>Not logged in.</div>;
  }
}
