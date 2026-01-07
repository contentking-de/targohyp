"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "./input";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/suche?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Suchen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 h-9 w-full max-w-[200px] text-sm border-gray-300 focus:border-targo-blue focus:ring-targo-blue"
        />
      </div>
    </form>
  );
}

