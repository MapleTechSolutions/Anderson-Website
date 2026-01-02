import StoryJourney from '../components/StoryJourney';
// ...existing code...

function StoryJourneyDemo() {
  return (
    <StoryJourney
      columns={[
        {
          title: 'Step 1: Discovery',
          paragraphs: [
            { text: 'The journey began with a simple question: What do we truly want for our future?', bold: false }
          ]
        },
        {
          title: 'Step 2: Planning',
          paragraphs: [
            { text: 'After much discussion, they outlined their goals and set priorities.', bold: false },
            { text: 'A clear roadmap was created to guide their actions.', bold: false }
          ]
        },
        {
          title: 'Step 3: Action',
          paragraphs: [
            { text: 'They started implementing their plan, making small but meaningful changes.', bold: false },
            { text: 'Their confidence grew as they saw progress.', bold: true }
          ]
        }
      ]}
    />
  );
}

export default StoryJourneyDemo;
