import Section from '@/components/Section';

const beforeAfter = [
  {
    before: 'Tools shipped faster than teachers could translate the workflow',
    after: 'We map features into classroom language with ready-to-run patterns',
  },
  {
    before: 'Students treated AI answers as final products',
    after: 'Students now use AI as a critique partner with process evidence checkpoints',
  },
  {
    before: 'Teachers guessed which AI prompts were safe or effective',
    after: 'Teachers receive tested prompts and rubrics aligned to learning targets',
  },
  {
    before: 'Mode guidance ignored student maturity',
    after: 'Modes now ladder responsibility from beginner guardrails to college prep rigor',
  },
];

const principles = [
  'Translate AI capabilities into instructional moves, not hype.',
  'Make workflows copyable while leaving space for teacher judgment.',
  'Demand visible process evidence so learning stays central.',
  'Respect student voice - AI can suggest, but students decide.',
  'Review and iterate: today\'s best practice may shift next month.',
];

export default function WhyPage() {
  return (
    <div className="space-y-8">
      <Section
        title="Why this playbook exists"
        description="We focus on distribution and translation: turning shifting AI tools into language that matches classroom expectations and student maturity."
      >
        <p className="text-sm text-slate-600">
          Teachers asked for more than tool lists - they needed workflows students could adopt without losing ownership of the learning. Students wanted clarity on where AI helps versus where it hurts. This site builds the bridge.
        </p>
      </Section>

      <Section title="Before -> After" description="How the work changes once AI guidance is translated for classrooms.">
        <ul className="space-y-3 text-sm text-slate-700">
          {beforeAfter.map((item) => (
            <li key={item.before}>
              <span className="font-semibold text-slate-800">Before:</span> {item.before}
              <br />
              <span className="font-semibold text-slate-800">After:</span> {item.after}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Guiding principles">
        <ul className="space-y-2 text-sm text-slate-700">
          {principles.map((principle) => (
            <li key={principle}>- {principle}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
