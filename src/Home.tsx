import React from "react";
import Page from "./shared/Page";
import {GoRadioTower, GoHome} from "react-icons/go";

export default function HomePage(): JSX.Element {
    return (
        <Page>
            <div className="header">
                <h1>Nova</h1>
            </div>
            <div className="content">
                <p>Yes.</p>
                <div className="grid">
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <GoRadioTower />
                            <p>Yes</p>
                        </div>
                        <div className="gridItemText">
                            <p>Uh-huh. Yes.</p>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <GoHome />
                            <p>Uh-huh.</p>
                        </div>
                        <div className="gridItemText">
                            <p>Yes, yes. Yes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
