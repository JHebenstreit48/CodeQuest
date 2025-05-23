import { RouteObject } from "react-router-dom";

// ----------------------- HTML Basics Start -----------------------

import HTML from "@/Pages/MainTabs/FrontEndPages/HTMLPages/HTMLBasics/HTMLIntro";
import HTMLELements from "@/Pages/MainTabs/FrontEndPages/HTMLPages/HTMLBasics/HTMLElements";
import HTMLAttributes from "@/Pages/MainTabs/FrontEndPages/HTMLPages/HTMLBasics/HTMLAttributes";
import HTMLForms from "@/Pages/MainTabs/FrontEndPages/HTMLPages/HTMLBasics/HTMLForms";
import HTMLSemantics from "@/Pages/MainTabs/FrontEndPages/HTMLPages/HTMLBasics/HTMLSemantics";

const htmlRoutes: RouteObject[] = [


    {
        path: '/html/basics/introduction',
        element: <HTML />,
    },
    {
        path: '/html/basics/elements',
        element: <HTMLELements />,
    },
    {
        path: '/html/basics/attributes',
        element: <HTMLAttributes />,
    },
    {
        path: '/html/basics/forms',
        element: <HTMLForms />,
    },
    {
        path: '/html/basics/semantic',
        element: <HTMLSemantics />,
    },

    // ------------------------ HTML Basics End ------------------------

];

export default htmlRoutes;