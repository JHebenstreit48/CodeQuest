import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const ReactAndTypeScriptCode = () => {
    const markdownFilePath = '/ReactAndTS/ReactAndTypeScriptCode.md';

    return (

        <>

            <Header text="React + TypeScript Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default ReactAndTypeScriptCode;
