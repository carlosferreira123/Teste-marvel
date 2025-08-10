import { Star, Users, Calendar } from 'lucide-react';
import { type Comic } from '../types/comic';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addItem } from '../store/cartSlice';
import { useToast } from '../hooks/use-toast';
import {
    CardContainer,
    ImageContainer,
    ComicImage,
    BadgeContainer,
    Badge,
    RatingContainer,
    RatingText,
    CardContent,
    Title,
    MetaContainer,
    MetaItem,
    Description,
    CardFooter,
    Price,
    AddButton
} from './ComicCard.styled';

interface ComicCardProps {
    comic: Comic;
}

export const ComicCard = ({ comic }: ComicCardProps) => {
    const dispatch = useAppDispatch();
    const { toast } = useToast();

    const handleAddToCart = () => {
        dispatch(addItem(comic));
        toast({
            title: "Adicionado ao carrinho!",
            description: `${comic.title} foi adicionado ao seu carrinho.`,
        });
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    const getBadgeText = (availability: string) => {
        switch (availability) {
            case 'available': return 'Disponível';
            case 'pre-order': return 'Pré-venda';
            case 'out-of-stock': return 'Esgotado';
            default: return 'Disponível';
        }
    };

    return (
        <CardContainer>
            <ImageContainer to={`/comic/${comic.id}`}>
                <ComicImage
                    src={comic.coverImage}
                    alt={comic.title}
                />
                <BadgeContainer>
                    {comic.rarity === 'rare' && (<Badge variant='rare'>Raro</Badge>)}
                    <Badge variant={comic.availability as 'available' | 'pre-order' | 'out-of-stock'}>
                        {getBadgeText(comic.availability)}
                    </Badge>
                </BadgeContainer>
                <RatingContainer>
                    <Star size={12} fill="hsl(var(--secondary))" color="hsl(var(--secondary))" />
                    <RatingText>{comic.rating}</RatingText>
                </RatingContainer>
            </ImageContainer>

            <CardContent>
                <Title to={`/comic/${comic.id}`}>
                    {comic.title}
                </Title>

                <MetaContainer>
                    <MetaItem>
                        <Users size={12} />
                        <span>{comic.series} #{comic.issueNumber}</span>
                    </MetaItem>
                    <MetaItem>
                        <Calendar size={12} />
                        <span>{new Date(comic.publishDate).toLocaleDateString('pt-BR')}</span>
                    </MetaItem>
                </MetaContainer>

                <Description>
                    {comic.description}
                </Description>
            </CardContent>

            <CardFooter>
                <Price>
                    {formatPrice(comic.price)}
                </Price>
                <AddButton
                    onClick={handleAddToCart}
                    disabled={comic.availability === 'out-of-stock'}
                    variant={comic.availability === 'out-of-stock' ? 'outline' : 'default'}
                >
                    {comic.availability === 'out-of-stock' ? 'Esgotado' : 'Adicionar'}
                </AddButton>
            </CardFooter>
        </CardContainer>
    );
};