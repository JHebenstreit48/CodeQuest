import { RouteObject } from "react-router-dom";

import gitRoutes from "@/routes/IndividualRoutes/ToolsRoutes/ContainerizationRoutes/gitRoutes";

const toolsRoutes: RouteObject[] = [
    ...gitRoutes,
];

export default toolsRoutes;