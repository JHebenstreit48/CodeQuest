import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Python = () => {
    const markdownFilePath = '/PythonNotes/Python.md';

    return (

        <>

            <Header text="Python" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default Python;
