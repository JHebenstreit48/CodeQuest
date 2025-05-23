import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Vitest = () => {
    const markdownFilePath = '/VitestNotes/Vitest';

    return (

        <>
            <Header text="Vitest" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vitest;
