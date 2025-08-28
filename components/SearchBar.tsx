import { useEffect, useId, useRef, useState } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search recipes (name, cuisine, tag, ingredient, time)…",
  className = "",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [local, setLocal] = useState(value);
  const labelId = useId();

  // Debounce upstream updates
  useEffect(() => {
    const t = setTimeout(() => onChange(local), 250);
    return () => clearTimeout(t);
  }, [local, onChange]);

  // Sync external clears
  useEffect(() => setLocal(value), [value]);

  // "/" to focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement !== inputRef.current &&
        !(document.activeElement instanceof HTMLInputElement) &&
        !(document.activeElement instanceof HTMLTextAreaElement) &&
        !(document.activeElement as HTMLElement | null)?.isContentEditable
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const hasText = local.trim().length > 0;

  return (
    <div
      role="search"
      aria-labelledby={labelId}
      className={[
        "relative w-full max-w-xl rounded-2xl border bg-white/70 backdrop-blur shadow-sm",
        "focus-within:ring-2 focus-within:ring-zinc-200",
        className,
      ].join(" ")}
    >
      <label id={labelId} className="sr-only">Search recipes</label>
      <span aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2">🔎</span>

      <input
        ref={inputRef}
        type="search"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-2xl bg-transparent pl-10 pr-20 outline-none"
        autoComplete="off"
        spellCheck={false}
      />

      {!hasText && (
        <kbd className="absolute right-12 top-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded-lg border">
          /
        </kbd>
      )}

      {hasText && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl px-3 py-1 text-sm border bg-white hover:bg-zinc-50"
          onClick={() => {
            setLocal("");
            onChange("");
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
        >
          Clear
        </button>
      )}
    </div>
  );
}
