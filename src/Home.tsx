import React from "react";
import Page from "./shared/Page";
import {GoRadioTower} from "react-icons/go";
import {SiGitea, SiDrone} from "react-icons/si";

export default function HomePage(): JSX.Element {
    return (
        <Page>
            <div className="header">
                <h1>Nova</h1>
            </div>
            <div className="content">
                <p>An """organization""" of friends creating projects for fun. We also host a couple of things.</p>
                <div className="grid">
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <GoRadioTower />
                            <p>Funkwhale</p>
                        </div>
                        <div className="gridItemText">
                            <p>
                                A private instance of the <a href="https://funkwhale.audio/">Funkwhale</a> audio player.
                            </p>
                            <p>
                                Registrations are <i>closed</i>, and we aren't planning on opening them.
                            </p>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <SiGitea />
                            <p>NovaGit</p>
                        </div>
                        <div className="gridItemText">
                            <p>
                                An instance of <a href="https://gitea.com">Gitea</a> for Nova-related projects.
                            </p>
                            <p>
                                Registrations are <i>closed</i>, because this is Nova-only.
                            </p>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItemHeader">
                            <SiDrone />
                            <p>Woodpecker (Drone)</p>
                        </div>
                        <div className="gridItemText">
                            <p>
                                An instance of the <a href="https://drone.io">Drone</a> fork{" "}
                                <a href="https://github.com/woodpecker-ci/woodpecker">Woodpecker</a> for use on NovaGit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
