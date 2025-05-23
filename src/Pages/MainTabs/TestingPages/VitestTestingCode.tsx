import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const VitestCode = () => {
    const markdownFilePath = '/VitestNotes/VitestCode';

    return (

        <>
            <Header text="Vitest Testing Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default VitestCode;
