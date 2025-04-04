import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const TestingCode = () => {
    const markdownFilePath = '/TestingNotes/TestingCode.md';

    return (

        <>

            <Header text="Testing Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default TestingCode;
