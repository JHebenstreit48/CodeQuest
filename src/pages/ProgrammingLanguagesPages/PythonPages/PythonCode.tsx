import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const PythonCode = () => {
    const markdownFilePath = "/PythonNotes/PythonCode.md";

    return (

        <>

            <Header text="Python Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );
};

export default PythonCode;
