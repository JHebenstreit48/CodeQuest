import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";
import pythonNotesMkdn from "../PythonNotes/PythonNotes";



export default function Python() {

    return (

        <>
        
            <h1 className="Header">Python</h1>
            <Navigation />
            <PageSetup
                markdownContent={pythonNotesMkdn}
            />

        </>
    );

}
