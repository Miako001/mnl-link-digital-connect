/** Abstract QR-inspired decorative mark. Not a scannable code. */
export function QrMotif({ className = "" }: { className?: string }) {
  const cells = [
    [1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 1, 1],
  ];
  return (
    <div aria-hidden="true" className={`grid grid-cols-8 gap-1.5 ${className}`}>
      {cells.flatMap((row, y) =>
        row.map((on, x) => (
          <span
            key={`${x}-${y}`}
            className={`aspect-square rounded-[2px] ${
              on ? (x + y) % 5 === 0 ? "bg-deco" : "bg-background/25" : "bg-background/5"
            }`}
          />
        )),
      )}
    </div>
  );
}
