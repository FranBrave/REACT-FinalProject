import React, { useEffect, useState } from "react";
import { Switch, SwitchLabel, SwitchRadio, SwitchSelection } from "./styles.js";
import shortid from "shortid";

const titleCase = (str) =>
    str
        .split(/\s+/)
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

const ClickableLabel = ({ title, onChange, id, switchInfo }) => (
    <SwitchLabel
        onClick={() => {
            onChange(title);
            switchInfo(title);
        }}
        className={id}
    >
        {titleCase(title)}
    </SwitchLabel>
);

const ConcealedRadio = () => <SwitchRadio type="radio" name="switch" />;

const SlidingButtons = ({ values, defaultSelected, switchInfo }) => {
    const [selected, setSelected] = useState();

    const handleChange = (val) => {
        setSelected(val);
    };

    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);

    const selectionStyle = () => {
        return {
            left: `${(values.indexOf(selected) / values.length) * 100}%`,
        };
    };

    return (
        <Switch>
            {values.map((val) => {
                return (
                    <span key={shortid.generate()}>
                        <ConcealedRadio value={val} selected={selected} />
                        <ClickableLabel
                            title={val}
                            onChange={handleChange}
                            switchInfo={switchInfo}
                        />
                    </span>
                );
            })}
            <SwitchSelection style={selectionStyle()} />
        </Switch>
    );
};

export default SlidingButtons;
