import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as S from './Pagination.styled.tsx';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const getPageNumbers = () => {
        const pages = [];
        const showPages = 5;

        const startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
        const endPage = Math.min(totalPages, startPage + showPages - 1);

        if (endPage - startPage + 1 < showPages) {
            startPage = Math.max(1, endPage - showPages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <S.PaginationContainer>
            <S.PaginationButton
                onClick={() => onPageChange(currentPage - 1)}
                $disabled={currentPage === 1}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="h-4 w-4" />
                <span>Anterior</span>
            </S.PaginationButton>

            <S.PaginationNumbers>
                {getPageNumbers().map((page) => (
                    <S.PageButton
                        key={page}
                        $isActive={page === currentPage}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </S.PageButton>
                ))}
            </S.PaginationNumbers>

            <S.PaginationButton
                onClick={() => onPageChange(currentPage + 1)}
                $disabled={currentPage === totalPages}
                disabled={currentPage === totalPages}
            >
                <span>Próxima</span>
                <ChevronRight className="h-4 w-4" />
            </S.PaginationButton>
        </S.PaginationContainer>
    );
};