import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ComicCard } from '../components/ComicCard';
import { Pagination } from '../components/Pagination';
import { type Comic } from '../types/comic';
import * as S from './Index.styled';
import api from '../services/api';



const Index = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const comicsPerPage = 20;

  useEffect(() => {
    api.get('/comics')
      .then(response => {
        setComics(response.data.data.results);

      })

      .catch((error) => {
        console.error('Error loading comics:', error);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

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
