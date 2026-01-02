import { inquiryQuestions, writingPrompt } from '@shared/content/inquiry';
import { SectionHeader, Callout } from '@shared/components';

export default function InquiryPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Discussion"
        title="Inquiry questions"
        description="Use these prompts to explore how possessions and prices relate to identity and community."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {inquiryQuestions.map((question, idx) => (
          <Callout key={idx} title={`Question ${idx + 1}`} tone={idx % 3 === 0 ? 'info' : 'success'}>
            {question}
          </Callout>
        ))}
      </div>
      <Callout title="Writing prompt" tone="info">
        {writingPrompt}
      </Callout>
    </div>
  );
}
