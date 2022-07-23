import React, { useEffect, useState } from "react";
import { Switch, SwitchLabel, SwitchRadio, SwitchSelection } from "./styles.js";
import shortid from "shortid";

const titleCase = (str) =>
    str
        .split(/\s+/)
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

const ClickableLabel = ({ title, onChange, id, switchInfo, home }) => (
    <SwitchLabel
        onClick={() => {
            onChange(title);
            switchInfo(title);
        }}
        className={id}
        home={home && true}
    >
        {titleCase(title)}
    </SwitchLabel>
);

const ConcealedRadio = () => <SwitchRadio type="radio" name="switch" />;

const SlidingButtons = ({ values, defaultSelected, switchInfo, home }) => {
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
        <Switch home={home && true}>
            {values.map((val) => {
                return (
                    <span key={shortid.generate()}>
                        <ConcealedRadio value={val} selected={selected} />
                        <ClickableLabel
                            title={val}
                            onChange={handleChange}
                            switchInfo={switchInfo}
                            home={home}
                        />
                    </span>
                );
            })}
            <SwitchSelection style={selectionStyle()} home={home && true} />
        </Switch>
    );
};

export default SlidingButtons;
