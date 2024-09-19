// import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import DynamicNotes from "../Notes/DynamicNotes";
import items from "../ReactFullStackNotes/FullStackReactNotes";
// import fullStackReactItemsWithCode from "../ReactFullStackNotes/FullStackReactCode";
export default function fullStackReact() {

    return (

        <>
            <h1 className="Header">Full-Stack React</h1>
            <Navigation />
            <DynamicNotes items={items} />
            {/*<DynamicNotesCode items={fullStackReactItemsWithCode} /> */}

        </>
    );

}
