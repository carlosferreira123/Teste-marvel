import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeItem, updateQuantity, clearCart } from '../store/cartSlice';
import { useToast } from '../hooks/use-toast';
import * as S from './Cart.styled';
import type { CartItem } from '../types/comic';
import { useMemo, useState } from 'react';

export default function Cart() {
    const dispatch = useAppDispatch();
    const { items, total } = useAppSelector(state => state.cart);
    const { toast } = useToast();


    const [couponInput, setCouponInput] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; type: 'common' | 'rare'; percent: number } | null>(null);

    const eligibleSubtotal = useMemo(() => {
        if (!appliedCoupon) return 0;
        return items.reduce((acc, item) => {
            const itemRarity = item.comic.rarity ?? 'common';
            const eligible = appliedCoupon.type === 'rare' ? itemRarity === 'rare' : itemRarity === 'common';
            return eligible ? acc + item.comic.price * item.quantity : acc;
        }, 0);
    }, [items, appliedCoupon]);

    const discount = appliedCoupon ? eligibleSubtotal * appliedCoupon.percent : 0;
    const finalTotal = Math.max(0, total - discount);

    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    const applyCoupon = () => {
        if (!couponInput) return;
        const code = couponInput.trim().toUpperCase();
        let coupon: { code: string; type: 'common' | 'rare'; percent: number } | null = null;

        if (code === 'COMUM10') {
            coupon = { code, type: 'common', percent: 0.10 };
        } else if (code === 'RARO15') {
            coupon = { code, type: 'rare', percent: 0.15 };
        }

        if (!coupon) {
            toast({ title: 'Cupom inválido', description: 'Use COMUM10 ou RARO15.' });
            return;
        }

        setAppliedCoupon(coupon);
        toast({ title: 'Cupom aplicado!', description: `${code} aplicado aos itens elegíveis.` });
    };

    const clearCoupon = () => setAppliedCoupon(null);

    const handleCheckout = () => {
        toast({
            title: 'Compra finalizada!',
            description: `Total de ${formatPrice(finalTotal)} processado com sucesso.`,
        });
        dispatch(clearCart());
        setAppliedCoupon(null);
    };

    if (items.length === 0) {
        return (
            <S.Container>
                <S.CartContainer>
                    <S.BackLink to="/">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Continuar comprando</span>
                    </S.BackLink>

                    <S.EmptyCart>
                        <S.EmptyCartIcon>
                            <ShoppingBag className="h-24 w-24 mx-auto" />
                        </S.EmptyCartIcon>
                        <S.EmptyCartTitle>Seu carrinho está vazio</S.EmptyCartTitle>
                        <S.EmptyCartDescription>
                            Adicione alguns quadrinhos incríveis à sua coleção!
                        </S.EmptyCartDescription>
                        <S.BackLink to="/">
                            <S.CheckoutButton>
                                Explorar Quadrinhos
                            </S.CheckoutButton>
                        </S.BackLink>
                    </S.EmptyCart>
                </S.CartContainer>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.CartContainer>
                <S.BackLink to="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Continuar comprando</span>
                </S.BackLink>

                <S.CartGrid>
                    {/* Cart Items */}
                    <S.CartItems>
                        <S.CartHeader>
                            <S.CartTitle>Carrinho de Compras</S.CartTitle>
                            <S.ClearButton onClick={() => dispatch(clearCart())}>
                                Limpar carrinho
                            </S.ClearButton>
                        </S.CartHeader>

                        {items.map((item: CartItem) => (
                            <S.CartItem key={item.comic.id}>
                                <S.ItemContent>
                                    <S.ItemImage>
                                        <img
                                            src={item.comic.coverImage}
                                            alt={item.comic.title}
                                        />
                                    </S.ItemImage>



                                    <S.QuantityControls>
                                        <S.QuantityButton
                                            onClick={() => dispatch(updateQuantity({ comicId: item.comic.id, quantity: item.quantity - 1 }))}
                                            $disabled={item.quantity <= 1}
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </S.QuantityButton>
                                        <S.QuantityDisplay>
                                            {item.quantity}
                                        </S.QuantityDisplay>
                                        <S.QuantityButton
                                            onClick={() => dispatch(updateQuantity({ comicId: item.comic.id, quantity: item.quantity + 1 }))}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </S.QuantityButton>
                                    </S.QuantityControls>

                                    <S.RemoveButton onClick={() => dispatch(removeItem(item.comic.id))}>
                                        <Trash2 className="h-4 w-4" />
                                    </S.RemoveButton>
                                </S.ItemContent>

                                <S.ItemDetails>
                                    <S.ItemTitle to={`/comic/${item.comic.id}`}>
                                        {item.comic.title}
                                    </S.ItemTitle>
                                    <S.ItemMeta>
                                        {item.comic.series} #{item.comic.issueNumber}
                                    </S.ItemMeta>
                                    <S.ItemPrice>
                                        {formatPrice(item.comic.price)}
                                    </S.ItemPrice>
                                </S.ItemDetails>
                            </S.CartItem>
                        ))}
                    </S.CartItems>

                    {/* Order Summary */}
                    <S.OrderSummary>
                        <S.SummaryTitle>Resumo do Pedido</S.SummaryTitle>

                        <S.CouponContainer>
                            <S.CouponInput
                                value={couponInput}
                                onChange={(e) => setCouponInput(e.target.value)}
                                placeholder="Cupom (COMUM10 ou RARO15)"
                                aria-label="Cupom de desconto"
                            />
                            <S.CouponApplyButton onClick={applyCoupon}>Aplicar</S.CouponApplyButton>
                        </S.CouponContainer>
                        {appliedCoupon && (
                            <S.AppliedRow>
                                <S.AppliedTag onClick={clearCoupon} title="Remover cupom">
                                    Cupom aplicado: {appliedCoupon.code} (clique para remover)
                                </S.AppliedTag>
                            </S.AppliedRow>
                        )}

                        <S.SummaryContent>
                            <S.SummaryRow>
                                <S.SummaryLabel>Subtotal ({items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0)} itens)</S.SummaryLabel>
                                <S.SummaryValue>{formatPrice(total)}</S.SummaryValue>
                            </S.SummaryRow>
                            <S.SummaryRow>
                                <S.SummaryLabel>Frete</S.SummaryLabel>
                                <S.SummaryValue $highlight>Grátis</S.SummaryValue>
                            </S.SummaryRow>
                            {appliedCoupon && (
                                <S.SummaryRow>
                                    <S.SummaryLabel>Desconto ({appliedCoupon.code})</S.SummaryLabel>
                                    <S.DiscountValue>-{formatPrice(discount)}</S.DiscountValue>
                                </S.SummaryRow>
                            )}
                            <S.SummaryDivider>
                                <S.SummaryTotal>
                                    <S.TotalLabel>Total</S.TotalLabel>
                                    <S.TotalValue>{formatPrice(finalTotal)}</S.TotalValue>
                                </S.SummaryTotal>
                            </S.SummaryDivider>
                        </S.SummaryContent>

                        <S.CheckoutButton onClick={handleCheckout}>
                            Finalizar Compra
                        </S.CheckoutButton>

                        <S.ShippingNote>
                            Frete grátis para todo o Brasil em compras acima de R$ 50,00
                        </S.ShippingNote>
                    </S.OrderSummary>
                </S.CartGrid>
            </S.CartContainer>
        </S.Container>
    );
}