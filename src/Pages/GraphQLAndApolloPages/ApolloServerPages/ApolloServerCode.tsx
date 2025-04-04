import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const ApolloServerCode = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServerCode.md';

    return (
        <>

            <Header text="Apollo Server Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ApolloServerCode;
