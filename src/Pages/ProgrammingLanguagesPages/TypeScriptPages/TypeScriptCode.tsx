import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const TypeScriptCode = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScriptCode.md';

    return (

        <>

            <Header text="TypeScript Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default TypeScriptCode;
