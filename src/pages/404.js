import { useRouter } from 'next/router';
import ErrorImage from '../assets/147-1473883_404-error-404-not-found-png.png';

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(() => {
        router.push('/');
    }, 4000)
    return (
        <div>
            <img src={"https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"}
                alt=""
                width="100%"
            />

            {/* <img src={ErrorImage} width="100%" alt="" /> */}
        </div>
    );
};

export default ErrorPage;