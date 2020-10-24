import React, {createContext, useContext, useMemo, useState} from "react";
const ActiveToDoListContext = createContext();
export function ActiveToDoListProvider(props) {
    const [activeToDoList, setActiveToDoList] = useState(null);
    const api = useMemo(() => ({
            activeToDoList,
            setActiveToDoList,
        }), [activeToDoList, setActiveToDoList]
    );
    return (
        <ActiveToDoListContext.Provider value={api}>
            {props.children}
        </ActiveToDoListContext.Provider>
    )
}
export const useActiveToDoListContext =
    () => useContext(ActiveToDoListContext);