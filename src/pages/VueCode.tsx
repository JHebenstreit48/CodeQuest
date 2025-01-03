import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const VueCode = () => {
    const markdownFilePath = '/VueNotes/VueCode.md';

    return (

        <>

            <Header text="Vue Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default VueCode;
