import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const GitCode = () => {
    const markdownFilePath = '/GitNotes/GitCode';

    return (

        <>

            <Header text="Git Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default GitCode;
