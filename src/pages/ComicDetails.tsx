import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Users, BookOpen, ShoppingCart } from 'lucide-react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { addItem } from '../store/cartSlice';
import { useToast } from '../hooks/use-toast';
import type { Comic } from '../types/comic';
import * as S from './ComicDetails.styled';
import { getComicById } from '../data/comic';

export default function ComicDetails() {
    const { id } = useParams<{ id: string }>();
    const [comic, setComic] = useState<Comic | null>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const { toast } = useToast();

    useEffect(() => {
        const fetchComic = async () => {
            if (!id) return;

            setLoading(true);
            try {
                const fetchedComic = await getComicById(id);
                setComic(fetchedComic || null);
            } catch (error) {
                console.error('Error loading comic:', error);
                setComic(null);
            } finally {
                setLoading(false);
            }
        };

        fetchComic();
    }, [id]);

    if (loading) {
        return (
            <S.LoadingContainer>
                <S.LoadingContent>
                    <S.LoadingTitle>Carregando...</S.LoadingTitle>
                </S.LoadingContent>
            </S.LoadingContainer>
        );
    }

    if (!comic) {
        return (
            <S.NotFoundContainer>
                <S.NotFoundContent>
                    <S.NotFoundTitle>Quadrinho não encontrado</S.NotFoundTitle>
                    <S.BackLink to="/">
                        <S.CheckoutButton>Voltar à loja</S.CheckoutButton>
                    </S.BackLink>
                </S.NotFoundContent>
            </S.NotFoundContainer>
        );
    }

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

    return (
        <S.Container>
            <S.DetailsContainer>
                <S.BackLink to="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Voltar à loja</span>
                </S.BackLink>

                <S.ComicGrid>
                    {/* Cover Image */}
                    <S.CoverSection>
                        <S.CoverImage>
                            <img
                                src={comic.coverImage}
                                alt={comic.title}
                            />
                        </S.CoverImage>
                        <S.AvailabilityBadge
                            $variant={comic.availability === 'available' ? 'default' :
                                comic.availability === 'pre-order' ? 'secondary' : 'destructive'}
                        >
                            {comic.availability === 'available' ? 'Disponível' :
                                comic.availability === 'pre-order' ? 'Pré-venda' : 'Esgotado'}
                        </S.AvailabilityBadge>
                    </S.CoverSection>

                    {/* Comic Info */}
                    <S.InfoSection>
                        <S.TitleSection>
                            <S.ComicTitle>
                                {comic.title}
                            </S.ComicTitle>
                            <S.ComicSeries>
                                {comic.series} #{comic.issueNumber}
                            </S.ComicSeries>
                        </S.TitleSection>

                        <S.MetaSection>
                            <S.RatingContainer>
                                <Star className="h-5 w-5 fill-secondary text-secondary" />
                                <S.RatingText>{comic.rating}/5</S.RatingText>
                            </S.RatingContainer>
                            <S.DateContainer>
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(comic.publishDate).toLocaleDateString('pt-BR')}</span>
                            </S.DateContainer>
                        </S.MetaSection>

                        <S.Description>
                            {comic.description}
                        </S.Description>

                        <S.CreatorsGrid>
                            <S.CreatorCard>
                                <S.CreatorTitle>
                                    <Users className="h-4 w-4" />
                                    <span>Roteiristas</span>
                                </S.CreatorTitle>
                                <S.CreatorList>
                                    {comic.writers.map((writer, index) => (
                                        <S.CreatorItem key={index}>{writer}</S.CreatorItem>
                                    ))}
                                </S.CreatorList>
                            </S.CreatorCard>

                            <S.CreatorCard>
                                <S.CreatorTitle>
                                    <BookOpen className="h-4 w-4" />
                                    <span>Artistas</span>
                                </S.CreatorTitle>
                                <S.CreatorList>
                                    {comic.artists.map((artist, index) => (
                                        <S.CreatorItem key={index}>{artist}</S.CreatorItem>
                                    ))}
                                </S.CreatorList>
                            </S.CreatorCard>
                        </S.CreatorsGrid>

                        <S.CharactersCard>
                            <S.CharactersTitle>Personagens principais</S.CharactersTitle>
                            <S.CharactersList>
                                {comic.characters.map((character, index) => (
                                    <S.CharacterBadge key={index}>
                                        {character}
                                    </S.CharacterBadge>
                                ))}
                            </S.CharactersList>
                        </S.CharactersCard>

                        <S.PurchaseSection>
                            <S.Price>
                                {formatPrice(comic.price)}
                            </S.Price>
                            <S.AddToCartButton
                                onClick={handleAddToCart}
                                $disabled={comic.availability === 'out-of-stock'}
                                disabled={comic.availability === 'out-of-stock'}
                                $variant={comic.availability === 'out-of-stock' ? 'outline' : undefined}
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span>
                                    {comic.availability === 'out-of-stock' ? 'Esgotado' : 'Adicionar ao Carrinho'}
                                </span>
                            </S.AddToCartButton>
                        </S.PurchaseSection>
                    </S.InfoSection>
                </S.ComicGrid>
            </S.DetailsContainer>
        </S.Container>
    );
}