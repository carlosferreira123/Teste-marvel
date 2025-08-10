import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import * as S from './NotFoundstyled.tsx';

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <S.Container>
            <S.Content>
                <S.ErrorCode>404</S.ErrorCode>
                <S.ErrorMessage>Oops! Page not found</S.ErrorMessage>
                <S.ReturnLink href="/">
                    Return to Home
                </S.ReturnLink>
            </S.Content>
        </S.Container>
    );
};

export default NotFound;
