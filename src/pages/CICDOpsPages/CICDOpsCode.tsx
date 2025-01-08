import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const CICDOpsCode = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOpsCode.md';

    return (

        <>

            <Header text="CICD Ops Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CICDOpsCode;
