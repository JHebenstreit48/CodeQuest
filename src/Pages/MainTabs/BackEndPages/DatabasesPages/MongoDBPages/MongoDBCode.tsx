import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const MongoDBCode = () => {
    const markdownFilePath = "BackEndNotes/DatabaseNotes//MongoDB/MongoDBCode";

    return (

        <>
            <Header text="MongoDB Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default MongoDBCode;
