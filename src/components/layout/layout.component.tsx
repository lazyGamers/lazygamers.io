import React, { ReactNode } from "react";

import layoutStyle from "./layout.component.module.scss";
import { Header, HeaderTheme } from "../header/header.component";
import { Footer } from "../footer/footer.component";

export interface LayoutProps {
    children: ReactNode;
    menuTheme?: HeaderTheme;
}

export class Layout extends React.Component<LayoutProps, {}> {
    
    private static defaultProps: LayoutProps = {
        children: null,
        menuTheme: "light"
    };
    
    public render() {
        const { children } = this.props;
        
        return (
            <>
                <Header theme={this.props.menuTheme as HeaderTheme}/>
                <div>
                    <main className={layoutStyle.mainContent}>{children}</main>
                    <Footer/>
                </div>
            </>
        );
    }
    
}
