import React from "react";

export default function Pagination({ page, totalPages, setPage }) {
  if (!totalPages || totalPages === 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-2 flex-wrap">
        {/* Prev */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg text-sm font-medium
          bg-blue-500 text-white hover:bg-blue-600
          disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Prev
        </button>

        {/* Page numbers */}
        {pages.map((p) => {
          const isActive = p === page;

          return (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition
              ${
                isActive
                  ? "bg-green-500 text-white shadow"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-lg text-sm font-medium
          bg-blue-500 text-white hover:bg-blue-600
          disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
