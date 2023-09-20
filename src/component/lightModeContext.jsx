import { createContext, useState } from "react";

const initalLightModeContextValue = {
    lightMode: false,
    toogleLightMode: () => { }
};

const LightModeContext = createContext({
    lightMode: initalLightModeContextValue.lightMode,
    toogleLightMode: initalLightModeContextValue.toogleLightMode
});

function LightModeProvider(props) {
    const [lightMode, setLightMode] = useState(false);

    const toogleLightMode = () => {
        setLightMode(!lightMode);
    };

    return (
        <div>
            <LightModeContext.Provider value={{ lightMode, toogleLightMode }}>
                {props.children}
            </LightModeContext.Provider>
        </div>
    );
}

export { LightModeContext, LightModeProvider };
