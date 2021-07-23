import React from "react";
import Page from "./shared/Page";

export default function MembersPage(): JSX.Element {
    return (
        <Page>
            <div className="header">
                <h1>Members</h1>
            </div>
            <div className="content">
                <p>Here's a list of members of the Nova organization.</p>
                <div className="grid">
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <img src="https://nova-vps.ml/~alyxia/static/img/Alyxia.png" height="120px" />
                            <p>Alyxia</p>
                        </div>
                        <div className="gridItemText">
                            <p>Hi, I'm Alyxia! I'm a 15 y/o hobbyist software developer based in the Netherlands.</p>
                            <p>I started the Nova organization, but as of now, there are 3 people in management.</p>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <img src="https://nova-vps.ml/~alyxia/static/img/Hades785.png" height="120px" />
                            <p>Loïc</p>
                        </div>
                        <div className="gridItemText">
                            <p>
                                Hey, Loïc here, aka Fuzuki, aka Hades785. I'm a 22 years old software, web and game
                                developer.
                            </p>
                            <p>
                                Nova started for me when Alyxia wanted to make a Discord bot with me. A lot of things
                                happened, and now we're here, all cozy on my VPS.
                            </p>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <img src="https://nova-vps.ml/~alyxia/static/img/keanucode.png" height="120px" />
                            <p>Keanu</p>
                        </div>
                        <div className="gridItemText">
                            <p>I'm Keanu. I do things from time to time.</p>
                            <p>I am usually just a ghost.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
