import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="size-40 bg-slate-600 w-[100%] text-yellow-400">
      <ul>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}
