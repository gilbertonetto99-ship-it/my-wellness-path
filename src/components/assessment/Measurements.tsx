import { useState } from "react";
import { useAssessment } from "../../context/AssessmentContext";
import { Button } from "../Button";
import { cn } from "../../lib/utils";

interface Props {
  onAdvance: () => void;
}

export function Measurements({ onAdvance }: Props) {
  const { answers, setAnswer } = useAssessment();
  const [feet, setFeet] = useState<string>(
    answers.heightIn ? String(Math.floor(answers.heightIn / 12)) : ""
  );
  const [inches, setInches] = useState<string>(
    answers.heightIn ? String(answers.heightIn % 12) : ""
  );
  const [weight, setWeight] = useState<string>(
    answers.currentWeightLb ? String(answers.currentWeightLb) : ""
  );

  const feetN = Number(feet);
  const inchN = Number(inches || 0);
  const weightN = Number(weight);
  const valid =
    feetN >= 4 && feetN <= 7 && inchN >= 0 && inchN < 12 && weightN >= 80 && weightN <= 500;

  function handleContinue() {
    setAnswer("heightIn", feetN * 12 + inchN);
    setAnswer("currentWeightLb", weightN);
    onAdvance();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-border bg-card p-6">
        <Label>Height</Label>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <FieldWithSuffix
            value={feet}
            onChange={setFeet}
            suffix="ft"
            placeholder="5"
            inputMode="numeric"
          />
          <FieldWithSuffix
            value={inches}
            onChange={setInches}
            suffix="in"
            placeholder="6"
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="rounded-3xl border border-border bg-card p-6">
        <Label>Current weight</Label>
        <div className="mt-3">
          <FieldWithSuffix
            value={weight}
            onChange={setWeight}
            suffix="lb"
            placeholder="165"
            inputMode="decimal"
          />
        </div>
      </div>
      <Button onClick={handleContinue} disabled={!valid}>
        Continue
      </Button>
    </div>
  );
}

export function WeightGoal({ onAdvance }: Props) {
  const { answers, setAnswer } = useAssessment();
  const [goal, setGoal] = useState<string>(
    answers.goalWeightLb ? String(answers.goalWeightLb) : ""
  );
  const goalN = Number(goal);
  const current = answers.currentWeightLb ?? 0;
  const valid = goalN >= 80 && goalN <= 500 && goalN <= current;

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-border bg-card p-6">
        <Label>Goal weight</Label>
        <div className="mt-3">
          <FieldWithSuffix
            value={goal}
            onChange={setGoal}
            suffix="lb"
            placeholder={String(Math.max(80, current - 20))}
            inputMode="decimal"
          />
        </div>
        {current && goalN && goalN < current ? (
          <p className="mt-3 text-sm text-muted-foreground">
            That's <span className="font-medium text-foreground">{current - goalN} lb</span>{" "}
            from where you are now.
          </p>
        ) : null}
      </div>
      <Button
        onClick={() => {
          setAnswer("goalWeightLb", goalN);
          onAdvance();
        }}
        disabled={!valid}
      >
        Continue
      </Button>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </div>
  );
}

interface FieldProps {
  value: string;
  onChange: (v: string) => void;
  suffix: string;
  placeholder?: string;
  inputMode?: "numeric" | "decimal";
}
function FieldWithSuffix({ value, onChange, suffix, placeholder, inputMode }: FieldProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 transition-colors",
        "focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-ring/30"
      )}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
        placeholder={placeholder}
        inputMode={inputMode}
        className="min-w-0 flex-1 bg-transparent text-2xl font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
      />
      <span className="text-sm text-muted-foreground">{suffix}</span>
    </div>
  );
}
