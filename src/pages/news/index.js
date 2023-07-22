import { Button } from 'antd';
import Link from 'next/link';

const NewsHomePage = () => {
    return (
        <div>
            <h2>This is News Home Page</h2>
            <Button type='primary' className=''>
                <Link href="/">Home</Link>
            </Button>
        </div>
    );
};

export default NewsHomePage;