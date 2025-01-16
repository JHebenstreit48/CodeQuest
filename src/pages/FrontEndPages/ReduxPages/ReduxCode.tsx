import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const ReduxCode = () => {
    const markdownFilePath = '/ReduxNotes/ReduxCode.md';

    return (

        <>

            <Header text="Redux Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default ReduxCode;
