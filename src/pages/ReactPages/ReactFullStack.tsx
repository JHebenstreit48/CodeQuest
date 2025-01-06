import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const ReactFullStack = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStack.md';

    return (

        <>
            <Header text="Full-Stack React" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactFullStack;
