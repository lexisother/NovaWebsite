import React from "react";
import Page from "./shared/Page";

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
                        <div className="gridItemHeader">Item1</div>
                        <div className="gridItemText">desc</div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">Item2</div>
                        <div className="gridItemText">desc</div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">Item3</div>
                        <div className="gridItemText">desc</div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">Item4</div>
                        <div className="gridItemText">desc</div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
