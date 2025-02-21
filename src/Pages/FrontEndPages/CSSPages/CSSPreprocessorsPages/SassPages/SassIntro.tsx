import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const SassIntro = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/Preprocessors/Sass/Introduction.md';

    return (

        <>
            <Header text="Sass Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default SassIntro;
