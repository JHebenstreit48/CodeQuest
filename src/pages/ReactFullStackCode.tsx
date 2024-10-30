import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const ReactFullStackCode = () => {
    const markdownFilePath = '/src/ReactFullStackNotes/ReactFullStackNotesWithCode.md';

    return (

        <>

            <h1 className="Header">React Full-Stack Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactFullStackCode;