import { Search } from 'lucide-react';


import {
    HeaderContainer,
    HeaderContent,
    Logo,
    LogoText,
    LogoSubtext,
    HeaderActions,
    SearchContainer,
    SearchInput,

} from './Header.styled';

export const Header = () => {

    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo to="/">
                    <LogoText>MARVEL</LogoText>
                    <LogoSubtext>Comics</LogoSubtext>
                </Logo>

                <HeaderActions>
                    <SearchContainer>
                        <Search size={16} color="hsl(var(--muted-foreground))" />
                        <SearchInput placeholder="Buscar quadrinhos..." />
                    </SearchContainer>


                </HeaderActions>
            </HeaderContent>
        </HeaderContainer>
    );
};