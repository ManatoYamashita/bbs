import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import BbsCard from './bbsCard';

const bbsCardList = () => {
    return (
        <div  className='grid lg:grid-cols-3 px-4 py-4 gap-4'>
            <BbsCard />
            <BbsCard />
            <BbsCard />
            <BbsCard />
            <BbsCard />
        </div>
    );
}

export default bbsCardList;