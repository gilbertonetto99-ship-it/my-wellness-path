import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import type { Personalization } from "../../lib/personalization";

export function TimelineChart({ p }: { p: Personalization }) {
  const min = Math.floor(p.goalWeightLb - 3);
  const max = Math.ceil(p.currentWeightLb + 3);
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Projected timeline
          </div>
          <div className="mt-2 font-display text-3xl text-foreground">
            {p.goalWeeks
              ? `Around week ${p.goalWeeks}`
              : `~${p.weeklyLossLb} lb per week`}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Estimate based on your inputs · not a guarantee
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-2xl text-primary">
            {p.goalWeightLb} lb
          </div>
          <div className="text-xs text-muted-foreground">goal</div>
        </div>
      </div>
      <div className="mt-6 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={p.timeline} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.25} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="week"
              tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
              tickLine={false}
              axisLine={false}
              interval={5}
              tickFormatter={(v) => `w${v}`}
            />
            <YAxis
              domain={[min, max]}
              tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
              tickLine={false}
              axisLine={false}
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                fontSize: 12,
              }}
              formatter={(v: number) => [`${v} lb`, "Weight"]}
              labelFormatter={(l) => `Week ${l}`}
            />
            <ReferenceLine
              y={p.goalWeightLb}
              stroke="var(--color-sand)"
              strokeDasharray="4 4"
            />
            <Area
              type="monotone"
              dataKey="weight"
              stroke="var(--color-primary)"
              strokeWidth={2}
              fill="url(#fill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
