import React from "react";
import { Link } from "gatsby";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { headerLinks } from "../../../content/header/header.content";

import headerStyle from "./header.component.module.scss";

export interface HeaderState {
    opened: boolean;
}

export interface HeaderProps {
    theme: HeaderTheme;
}

export type HeaderTheme = "light" | "dark";

export class Header extends React.Component<HeaderProps, HeaderState> {
    
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            opened: false
        };
    }
    
    private toggle(): void {
        this.setState({
            opened: !this.state.opened
        });
    }
    
    public render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <header>
                        <nav className={`navbar navbar-expand-lg navbar-light
                         ${this.props.theme === "dark" ? headerStyle.darkTheme : headerStyle.lightTheme}
                         ${headerStyle.navbarOverride}`}>
                            <Link to="/" className={`navbar-brand ${headerStyle.brandOverride}`}>LazyGamers</Link>
                            <button className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarTogglerDemo02"
                                aria-controls="navbar-links" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            
                            <div className={`collapse navbar-collapse ${headerStyle.navbarLinksOverride}`} id="navbar-links">
                                <ul className={`navbar-nav mr-auto mt-2 mt-lg-0 ${headerStyle.navOverride}`}>
                                    {headerLinks.map((link, index) => (
                                        <li className="nav-item" key={index}>
                                            <Link to={link.url} className="nav-link">{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                        
                        
                        {/*<Navbar color="light" light={true} expand="md">*/}
                        {/*    <NavbarBrand href="/">LazyGamers</NavbarBrand>*/}
                        {/*    <NavbarToggler onClick={this.toggle}/>*/}
                        {/*    <Collapse isOpen={this.state.opened} navbar={true}>*/}
                        {/*        <Nav className="ml-auto" navbar={true}>*/}
                        {/*            {headerLinks.map((link, index) => (*/}
                        {/*                <NavItem key={index}>*/}
                        {/*                    <NavLink href={link.url}>{link.title}</NavLink>*/}
                        {/*                </NavItem>*/}
                        {/*            ))}*/}
                        {/*        </Nav>*/}
                        {/*    </Collapse>*/}
                        {/*</Navbar>*/}
                    
                    </header>
                </div>
            </div>
        );
    }
}
