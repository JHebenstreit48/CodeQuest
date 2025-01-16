import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const CICDOps = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOps.md';

    return (

        <>

            <Header text="CICD Ops" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default CICDOps;
