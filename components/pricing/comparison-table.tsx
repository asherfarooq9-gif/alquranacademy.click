import { Check, X } from "lucide-react";

import { COMPARISON_ROWS } from "@/content/pricing-plans";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto size-4 text-primary" />;
  if (value === false) return <X className="mx-auto size-4 text-muted-foreground/40" />;
  return <span>{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-border">
      <table className="w-full min-w-[560px] border-collapse bg-card text-sm">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="px-4 py-3 text-left font-medium">Feature</th>
            <th className="px-4 py-3 text-center font-medium">Starter</th>
            <th className="px-4 py-3 text-center font-medium">Standard</th>
            <th className="px-4 py-3 text-center font-medium">Intensive</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, index) => (
            <tr
              key={row.feature}
              className={`border-b border-border last:border-none ${index % 2 === 1 ? "bg-muted/50" : ""}`}
            >
              <td className="px-4 py-3 font-medium text-muted-foreground">{row.feature}</td>
              <td className="px-4 py-3 text-center">
                <Cell value={row.starter} />
              </td>
              <td className="px-4 py-3 text-center">
                <Cell value={row.standard} />
              </td>
              <td className="px-4 py-3 text-center">
                <Cell value={row.intensive} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
