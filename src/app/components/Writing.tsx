import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface WritingItem {
  title: string;
  publication: string;
  date: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

interface WritingListProps {
  writing: readonly WritingItem[];
  className?: string;
}

function WritingList({ writing, className }: WritingListProps) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 print:gap-2", className)}
      aria-label="List of writing"
    >
      {writing.map((item, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 p-6 transition-all hover:border-gray-400 hover:bg-gray-100/50 hover:shadow-md dark:border-gray-600 dark:bg-gray-800/30 dark:hover:border-gray-500 dark:hover:bg-gray-700/30 print:border-solid print:border-gray-400 print:bg-none print:p-4 print:break-inside-avoid">
          <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-20 dark:from-gray-600 dark:to-gray-700 print:hidden"></div>
          <div className="relative">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-base font-semibold leading-none print:text-sm">
                {item.title}
              </h3>
              <time className="ml-4 shrink-0 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 print:bg-none print:text-[10px] print:text-gray-600">
                {item.date}
              </time>
            </div>
            <div className="mb-3 inline-block rounded bg-gray-200/70 px-2 py-1 font-mono text-xs font-semibold text-gray-700 dark:bg-gray-700/70 dark:text-gray-300 print:bg-none print:text-[10px] print:text-gray-700">
              📝 {item.publication}
            </div>
            <p className="mb-4 text-xs text-foreground/80 text-pretty font-mono print:text-[12px]">
              {item.description}
            </p>
            {item.link && (
              <div className="print:hidden">
                <Button
                  asChild
                  size="sm"
                  className="h-8 rounded-full bg-gray-800 px-4 text-xs font-medium text-white hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} at ${item.link.label}`}
                  >
                    {item.link.label} →
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

interface WritingProps {
  writing: readonly WritingItem[];
  className?: string;
}

export function Writing({ writing, className }: WritingProps) {
  if (!writing || writing.length === 0) {
    return null;
  }

  return (
    <Section className={cn("print:break-before-page", className)}>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 print:bg-gray-300">
          <span className="text-sm">📝</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 print:text-black" id="writing-section">
          Writing
        </h2>
      </div>
      <WritingList writing={writing} aria-labelledby="writing-section" />
    </Section>
  );
}