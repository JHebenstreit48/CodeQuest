import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const ReactFullStackCode = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStackCode';

    return (

        <>

            <Header text="Full-Stack React Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ReactFullStackCode;
