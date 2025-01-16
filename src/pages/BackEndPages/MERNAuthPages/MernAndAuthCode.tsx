import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const MernAndAuthCode = () => {
    const markdownFilePath = '/MernAndAuth/MernAndAuthCode.md';

    return (

        <>

            <Header text="Mern Stack Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default MernAndAuthCode;
