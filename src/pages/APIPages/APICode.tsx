import CodePageSetup from '@/Components/Notes';
import Header from '@/Components/Header';

const APICode = () => {
    const markdownFilePath = '/APINotes/APICode.md';

    return (
        <>

            <Header text="API Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default APICode;
