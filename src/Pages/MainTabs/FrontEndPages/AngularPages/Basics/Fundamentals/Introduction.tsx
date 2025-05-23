import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRender';

const AngularIntro = () => {
  const markdownFilePath =
    'FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/Introduction';

  return (
    <>
      <PageLayout>
        <Header
          text="Angular Introduction"
          size="md"
        />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default AngularIntro;
