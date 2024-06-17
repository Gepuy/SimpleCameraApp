import { AppHeader } from '@components/AppHeader/AppHeader';
import { StyledAppView } from '@components/AppPage/AppPage.styled';
import { StyledSafeAreaView } from '@components/SafeArea/SafeArea.styled';
import React, { PropsWithChildren } from "react";

type AppViewProps = {
    readonly height?: string;
    readonly width?: string;
    readonly shouldShowHeader?: boolean;
    readonly title: string;
    readonly shouldShowLogo?: boolean;
}

export const AppView = ({
    children, height, width, shouldShowHeader = true, title, shouldShowLogo
}: Readonly<PropsWithChildren<AppViewProps>>) => {
    return (
        <StyledSafeAreaView>
            <StyledAppView height={height} width={width}>
                {shouldShowHeader &&
                  <AppHeader
                    title={title}
                    shouldShowLogo={shouldShowLogo}
                  />
                }
                {children}
            </StyledAppView>
        </StyledSafeAreaView>
    );
};
