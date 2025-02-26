"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend.thatdisabilityadventurecompany.com.au/api/example-endpoint")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>TDAC Frontend</title>
        <meta name="description" content="Next.js frontend for TDAC" />
      </Head>
      <main className="p-8">
        <h1 className="text-2xl font-bold">Welcome to TDAC</h1>
        
      </main>
    </div>
  );
}