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
            </div>
        </Page>
    );
}
