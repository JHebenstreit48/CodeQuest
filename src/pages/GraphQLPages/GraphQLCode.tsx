import CodePageSetup from '@/Components/Notes';
import Header from '@/Components/Header';

const GraphQLCode = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQLCode.md';

    return (
        <>

            <Header text="GraphQL Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default GraphQLCode;
