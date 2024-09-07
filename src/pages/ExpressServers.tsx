import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Header from "../Components/Header";
import items from "../Components/ExpressServersNotes";
import itemsWithCode from "../Components/ExpressSeversCode";
import Navigation from "../Components/Navigation";
export default function servers() {

    return (

        <>
            <Header text="Express Servers" />
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } />
        </>
    );
}
