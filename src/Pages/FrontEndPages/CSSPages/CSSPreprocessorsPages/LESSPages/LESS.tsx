import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const LESS = () => {
    const markdownFilePath = '/LESSNotes/LESS.md';

    return (

        <>
            <Header text="LESS" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default LESS;
