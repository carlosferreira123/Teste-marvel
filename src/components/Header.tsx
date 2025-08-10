import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';




import {
    HeaderContainer,
    HeaderContent,
    Logo,
    LogoText,
    LogoSubtext,
    HeaderActions,

    CartButton,
    CartButtonText,
    CartBadge,

} from './Header.styled';

export const Header = () => {
    const cartItems = useAppSelector(state => state.cart.items);
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);


    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo to="/">
                    <LogoText>MARVEL</LogoText>
                    <LogoSubtext>Comics</LogoSubtext>
                </Logo>

                <HeaderActions>


                    <CartButton to="/cart">
                        <ShoppingCart size={16} />
                        {itemCount > 0 && (
                            <CartBadge>{itemCount}</CartBadge>
                        )}
                        <CartButtonText>Carrinho</CartButtonText>
                    </CartButton>
                </HeaderActions>
            </HeaderContent>
        </HeaderContainer>
    );
};