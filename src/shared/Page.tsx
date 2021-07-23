import React from "react";
import Helmet from "react-helmet";
import Link from "./Link";
import "../css/index.scss";

interface MetaProps {
    title?: string;
    description?: string;
    keywords?: string[];
    imageUrl?: string;
}
function Meta({title, description, keywords}: MetaProps): JSX.Element {
    const defaults = {
        title: "Nova",
        description: "Nova website"
    };

    const actual = {
        title: title ? `${title} | ${defaults.title}` : defaults.title,
        description: description || defaults.description,
        keywords: keywords?.join(", ")
    };
    return (
        <Helmet>
            <html lang="en" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{actual.title}</title>

            <meta name="description" content={actual.description} />
            {actual.keywords && <meta name="keywords" content={actual.keywords} />}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={actual.title} />
            <meta property="og:description" content={actual.description} />

            <meta name="twitter:title" content={actual.title} />
            <meta name="twitter:site" content="@lexisother" />
            <meta name="twitter:creator" content="@lexisother" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={actual.description} />
        </Helmet>
    );
}

function Navigation(): JSX.Element {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className="navbar-image" src="https://git.nova-vps.ml/assets/img/logo.png" height="60rem" />
            </div>

            <div className="navbar-links">
                <Link className="navbar-link" activeClassName="navbar-link--active" activeExact href="/">
                    Home
                </Link>
            </div>
        </nav>
    );
}

interface PageProps extends MetaProps {
    children: React.ReactNode;
}
const Page = ({children, ...props}: PageProps): JSX.Element => {
    return (
        <div className="page-container">
            <Meta {...props} />
            <Navigation />

            <main>{children}</main>
        </div>
    );
};

export default Page;
