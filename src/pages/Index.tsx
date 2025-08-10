import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ComicCard } from '../components/ComicCard';
import { Pagination } from '../components/Pagination';
import api, { type MarvelComic } from '../services/api';
import type { Comic } from '../types/comic';
import * as S from './Index.styled';

const Index = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const comicsPerPage = 6;

  const transformMarvelComic = (marvelComic: MarvelComic): Comic => {
    const printPrice = marvelComic.prices?.find((p: { type: string; price: number }) => p.type === 'printPrice')?.price || 0;
    const publishDate = marvelComic.dates?.find((d: { type: string; date: string }) => d.type === 'onsaleDate')?.date || '';

    const writers = (marvelComic.creators?.items || [])
      .filter((creator: { role: string; name: string }) => String(creator.role || '').toLowerCase().includes('writer'))
      .map((creator: { name: string }) => creator.name);

    const artists = (marvelComic.creators?.items || [])
      .filter((creator: { role: string }) => {
        const role = String(creator.role || '').toLowerCase();
        return role.includes('artist') || role.includes('penciler');
      })
      .map((creator: { name: string }) => creator.name);

    const characters = (marvelComic.characters?.items || []).map((char: { name: string }) => char.name);

    return {
      id: String(marvelComic.id),
      title: marvelComic.title,
      description: marvelComic.description || 'Descrição não disponível',
      coverImage: `${marvelComic.thumbnail?.path}/portrait_incredible.${marvelComic.thumbnail?.extension}`,
      price: printPrice,
      series: marvelComic.series?.name || 'Série não informada',
      issueNumber: marvelComic.issueNumber || 1,
      publishDate: publishDate ? new Date(publishDate).toISOString().split('T')[0] : '2024-01-01',
      writers: writers.length > 0 ? writers : ['Autor não informado'],
      artists: artists.length > 0 ? artists : ['Artista não informado'],
      characters: characters.length > 0 ? characters : ['Personagens não informados'],
      rating: Math.random() * 2 + 3,
      availability: 'available',
    };
  };

  useEffect(() => {
    setLoading(true);

    api
      .get('/comics', {
        params: {
          limit: comicsPerPage,
          offset: (currentPage - 1) * comicsPerPage,
          format: 'comic',
          formatType: 'comic',
          orderBy: '-onsaleDate',
        },
      })
      .then((response) => {
        const results = response.data?.data?.results || [];
        const total: number = response.data?.data?.total || 0;
        setComics(results.map(transformMarvelComic));
        setTotalPages(Math.max(1, Math.ceil(total / comicsPerPage)));
      })
      .catch((error) => {
        console.error('Error loading comics:', error);
        setComics([]);
        setTotalPages(1);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      {/* Hero Section */}
      <S.HeroSection
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <S.HeroBackground />
        <S.HeroContent
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <S.HeroInner>
            <S.HeroTitle
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              MARVEL
            </S.HeroTitle>
            <S.HeroDescription
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Descubra as histórias mais épicas do universo Marvel.
              Heróis, vilões e aventuras que definiram gerações.
            </S.HeroDescription>
            <S.HeroActions
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <a href="#comics">
                <S.HeroButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorar Quadrinhos
                </S.HeroButton>
              </a>
            </S.HeroActions>
          </S.HeroInner>
        </S.HeroContent>
      </S.HeroSection>

      {/* Comics Grid */}
      <S.ComicsSection id="comics">
        <S.ComicsContainer>
          <S.ComicsHeader
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <S.ComicsTitle>Quadrinhos em Destaque</S.ComicsTitle>
            <S.ComicsSubtitle>
              As melhores histórias do universo Marvel estão aqui
            </S.ComicsSubtitle>
          </S.ComicsHeader>

          {loading ? (
            <S.LoadingGrid
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }}
            >
              {Array.from({ length: comicsPerPage }).map((_, index) => (
                <S.LoadingCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <S.LoadingImage />
                  <S.LoadingTitle />
                  <S.LoadingSubtitle />
                </S.LoadingCard>
              ))}
            </S.LoadingGrid>
          ) : (
            <>
              <S.ComicsGrid
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }}
                viewport={{ once: true }}
              >
                {comics.map((comic) => (
                  <ComicCard key={comic.id} comic={comic} />
                ))}
              </S.ComicsGrid>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </S.ComicsContainer>
      </S.ComicsSection>
    </S.Container>
  );
};

export default Index;