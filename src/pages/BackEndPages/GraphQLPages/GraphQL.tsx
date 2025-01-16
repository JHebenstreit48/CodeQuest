import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const GraphQL = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQL.md';

    return (

        <>
            <Header text="GraphQL" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default GraphQL;
