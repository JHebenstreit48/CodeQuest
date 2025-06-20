import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTMLIntro = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/HTMLBasics/HTMLIntro";

    return (

        <>
            <Header text="HTML Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTMLIntro;
