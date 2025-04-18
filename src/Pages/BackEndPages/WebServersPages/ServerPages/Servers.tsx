import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Servers = () => {
    const markdownFilePath = '/ServerNotes/Server.md';

    return (

        <>
            <Header text="Servers" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Servers;
