import type { ModeKey } from './types';

type Prompt = {
  label: string;
  text: string;
};

export type Workflow = {
  title: string;
  whenToUse: string;
  steps: string[];
  prompts: Prompt[];
};

export const studentWorkflows: Record<ModeKey, Workflow[]> = {
  beginner: [
    {
      title: 'NotebookLM Study Recap',
      whenToUse: 'After class when you want a quick summary and gentle Q&A from your notes.',
      steps: [
        'Upload today\'s notes or a PDF from class into NotebookLM.',
        'Ask NotebookLM for a short summary with key terms defined in simple language.',
        'Request three self-check questions and try answering them on paper first.',
        'Use the generated questions in NotebookLM\'s Q&A to compare with your own answers.',
        'Create a mindmap or podcast view to hear the explanation another way.',
        'Write a one-sentence reflection about what still feels uncertain.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `You are my study buddy. Summarize the uploaded notes in 5 bullet points using beginner-friendly language. Highlight any vocabulary I should review. Then generate 3 self-check questions I can answer on my own before checking with you.`,
        },
      ],
    },
    {
      title: 'Perplexity Source Snapshot',
      whenToUse: 'When you need a fast, cited overview for a class discussion or short response.',
      steps: [
        'Open Perplexity and paste the question or topic you are researching.',
        'Read the answer but focus on the cited sources listed underneath.',
        'Open at least two sources to confirm they look trustworthy and relevant.',
        'Ask Perplexity to compare what the sources agree or disagree on.',
        'Capture the citation links in your notes and add a one-sentence takeaway.',
        'Record what you still need from a primary or textbook source.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `Give me a concise, cited overview of [topic]. List 3 reputable sources with short notes on what each contributes. End with two contrasting points I should explore further.`,
        },
      ],
    },
  ],
  intermediate: [
    {
      title: 'Subject AI: Math Check + Explain',
      whenToUse: 'When you have solved a math or physics problem and want to verify reasoning without replacing your work.',
      steps: [
        'Work the full problem on paper first, showing all reasoning.',
        'Open your subject-specific AI (Math GPT, Physics tutor, etc.).',
        'Paste your solution and ask the AI to critique each step for accuracy.',
        'If the AI disagrees, compare its explanation with your own and note the difference.',
        'Ask for an explanation that you can use to teach a classmate the concept.',
        'Rewrite the step that changed and document what you learned.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `Here is my full solution to this problem: [paste work]. Check each step for correctness. Identify any mistakes, show the correct reasoning, and give me a quick script I can use to teach the concept.`,
        },
      ],
    },
    {
      title: 'Lex Draft + Revision Loop',
      whenToUse: 'When you want to move from a rough outline to a polished paragraph while keeping your own voice.',
      steps: [
        'Collect your outline bullets and any key evidence in one doc.',
        'Open Lex and use the "continue writing" feature to expand one section at a time.',
        'Stop the AI when it sounds too generic; rewrite lines to match your tone.',
        'Ask Lex for a revision pass focused on clarity and concise sentences.',
        'Highlight changes that improved the draft and note why.',
        'Save both the draft and your reflection as process evidence.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `Take this outline and expand it into a 2-paragraph draft that sounds like a thoughtful high school student. Keep my original phrasing where possible. Flag any claims that need evidence and suggest where to cite. Outline: [paste bullets].`,
        },
        {
          label: 'Copy Revision Prompt',
          text: `Revise the draft above for clarity and flow. Keep my voice and highlight edits you make with a short explanation of why each change helps.`,
        },
      ],
    },
  ],
  advanced: [
    {
      title: 'Gamma Concept Deck Sprint',
      whenToUse: 'When you need slides to teach or present a complex concept quickly.',
      steps: [
        'Gather notes, citations, and any visuals you plan to use.',
        'Ask Gamma to build a deck with 6-8 slides covering the core idea, evidence, and takeaway.',
        'Preview the structure and edit slide titles to fit your narrative.',
        'Insert your own examples or case studies so the deck reflects your voice.',
        'Export to PowerPoint or PDF and check the accessibility of colors and fonts.',
        'Add speaker notes that remind you where to slow down or ask questions.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `Create a slide deck (8 slides max) that teaches [concept]. Use a clear arc: hook, core idea, evidence, application, reflection. Suggest visuals but leave room for my own examples. Flag any claims that still need citation.`,
        },
      ],
    },
    {
      title: 'Perplexity Compare + Evaluate',
      whenToUse: 'When you want to contrast multiple expert takes and decide which to trust.',
      steps: [
        'Enter a focused question that invites differing viewpoints.',
        'Read the initial answer and identify the unique claims being made.',
        'Ask Perplexity to fetch at least four sources with contrasting positions.',
        'Open each source, skim the method or author credentials, and note reliability.',
        'Ask for a comparison table with evidence and any gaps or missing voices.',
        'Write a short evaluation of which source you will lean on and why.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `For the question "[topic/question]", gather 4 contrasting sources. Build a table with: claim, key evidence, author/expertise, and potential bias. End with what additional data I should seek before deciding.`,
        },
      ],
    },
  ],
  college: [
    {
      title: 'NotebookLM Research Trace',
      whenToUse: 'When you are synthesizing several PDFs and need to keep citations straight.',
      steps: [
        'Upload curated articles or textbook chapters into NotebookLM.',
        'Request a synthesis that highlights where authors agree and disagree.',
        'Ask for precise citations (page or section) for every major claim.',
        'Generate a list of follow-up questions that require primary sources.',
        'Export summary notes and attach them to your research log.',
        'Write a reflection memo on how AI summaries will be verified before use.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `Synthesize the uploaded sources into a short brief: thesis, points of convergence, points of disagreement, and direct quotes with page numbers. Finish with 3 research questions for primary-source follow-up.`,
        },
      ],
    },
    {
      title: 'Notion + Zapier Deadline Tracker',
      whenToUse: 'When multiple coursework threads need due dates, status updates, and reminders.',
      steps: [
        'Create a Notion database with assignments, checkpoints, and evidence to submit.',
        'Design properties for due date, status, required AI process evidence, and reflection link.',
        'Use Zapier to trigger reminders 3 and 1 days before each due date.',
        'Add a template page that prompts you to log planning notes and AI interactions.',
        'Automate a weekly digest email summarizing open tasks and reflection status.',
        'Review the automation logs every week to ensure reminders are sent correctly.',
      ],
      prompts: [
        {
          label: 'Copy Prompt',
          text: `Draft a Notion database template for tracking assignments that require AI process evidence. Include properties for due date, checkpoints, AI tools used, reflection link, and instructor feedback. Provide Zapier automation steps for reminders 3 days and 1 day before due dates.`,
        },
      ],
    },
  ],
};

export const teacherWorkflows: Workflow[] = [
  {
    title: 'AI-Allowed Zones Charter',
    whenToUse: 'At the start of a unit to define how students may and may not use AI tools.',
    steps: [
      'Identify the core learning goals and which phases benefit from AI support.',
      'Draft allowed zones (brainstorm, outline, critique) and restricted zones (final drafting, original analysis).',
      'Map required process evidence: planning notes, AI transcripts, reflection memo.',
      'Share examples of acceptable vs. unacceptable AI use with the class.',
      'Build a quick check-in form for students to log their AI interactions.',
      'Review the charter mid-unit and adjust language based on classroom observations.',
    ],
    prompts: [
      {
        label: 'Copy Prompt',
        text: `You are an instructional coach. Draft an "AI-Allowed Zones" charter for a high school humanities unit. Include: allowed AI tasks (brainstorm, outline, critique), restricted tasks (final drafting, personal reflection), and required student evidence (planning notes, AI chat exports, short reflection). Use clear, student-facing language.`,
      },
    ],
  },
  {
    title: 'AP Bio Concept Explanation Assignment',
    whenToUse: 'To guide students through explaining complex biology processes with transparent AI support.',
    steps: [
      'Choose a concept that benefits from layered explanation (e.g., cellular respiration).',
      'Provide students with an outline scaffold and clarify where AI brainstorming is allowed.',
      'Require students to generate a first draft without AI, then use AI for critique only.',
      'Collect AI transcripts and student revision notes as part of the submission.',
      'Assess using rubric bullets that reward accuracy, clarity, and reflection on tool use.',
      'Host a debrief to surface how AI critique improved specific sections.',
    ],
    prompts: [
      {
        label: 'Copy Student Instructions',
        text: `Assignment: Explain [AP Bio concept] for a peer who missed class. Step 1: Draft your explanation without AI help. Step 2: Paste your draft into an AI critique tool and ask for conceptual gaps, missing vocabulary, and analogies. Step 3: Revise using your own words. Submit: final explanation, critique transcript, and a 150-word reflection on what changed.`,
      },
      {
        label: 'Copy Rubric Bullets',
        text: `- Shows accurate, grade-level explanation of the concept with key vocabulary.
- Incorporates analogies or visuals that aid understanding.
- Documents AI use with a critique transcript and highlights revisions made.
- Reflection notes what the student kept, changed, or rejected from AI feedback.`,
      },
    ],
  },
  {
    title: 'DBQ Outline with Citations',
    whenToUse: 'For history classes guiding students through document-based question planning with AI checkpoints.',
    steps: [
      'Select documents and central question; share with students digitally.',
      'Clarify that AI may support outlining and evidence pairing but not final essay writing.',
      'Have students propose a claim and use AI to stress test evidence alignment.',
      'Require a comparison chart showing how each document supports or complicates the claim.',
      'Students submit the outline, AI prompts used, and their evaluation of AI suggestions.',
      'Use rubric bullets that reward alignment, citation accuracy, and metacognition.',
    ],
    prompts: [
      {
        label: 'Copy Teacher Prompt',
        text: `Generate a DBQ outline template for the question "[DBQ prompt]". Sections: claim, contextualization notes, evidence table (document, quote, how it supports/complicates), counterargument, and planned thesis sentence. Include a student reflection box on how AI feedback was used.`,
      },
      {
        label: 'Copy Student Prompt',
        text: `Here is my tentative DBQ claim and list of documents: [paste]. Stress test the claim. For each document, suggest how it supports or challenges my argument and flag any sourcing or citation issues to double-check.`,
      },
    ],
  },
  {
    title: 'Lab Report Reflection Rubric',
    whenToUse: 'In science labs where students must document how AI supported analysis without replacing their reasoning.',
    steps: [
      'Identify which lab stages may use AI (data organization, critique) and which must remain manual (calculations, conclusions).',
      'Share a rubric that awards credit for transparent AI use and thoughtful reflection.',
      'Provide a reflection template that prompts students to justify each AI interaction.',
      'Require screenshots or exports of AI chats as appendices.',
      'Hold a brief conference or asynchronous check to review reflection quality.',
      'Iterate on the rubric after observing student submissions.',
    ],
    prompts: [
      {
        label: 'Copy Rubric Bullets',
        text: `- Identifies each AI tool used and the purpose (organize data, critique graph, etc.).
- Explains what the student accepted, modified, or rejected from AI feedback.
- Shows original calculations or reasoning separate from AI output.
- Reflection connects AI use to lab accuracy and future improvements.`,
      },
      {
        label: 'Copy Student Reflection Prompt',
        text: `Write a 200-word reflection: describe when you used AI during the lab, why you chose that moment, what advice you kept or changed, and how you verified the final results.`,
      },
    ],
  },
];
