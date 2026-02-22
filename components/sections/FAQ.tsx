"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { FAQ_ITEMS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title="Questions? Answered." />
        </FadeIn>

        <div className="mt-16 max-w-3xl mx-auto px-4">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
