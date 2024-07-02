import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import BbsCard from './bbsCard';
import { BBSData } from '@/app/types/types';

interface BBSAllDataProps {
    bbsAllData: BBSData[];
}

const bbsCardList = ({ bbsAllData }: BBSAllDataProps) => {
    return (
        <div className='grid lg:grid-cols-3 px-4 py-4 gap-4'>
            {bbsAllData.map((bbsData: BBSData) => (
                <BbsCard key={bbsData.id} bbsData={bbsData} />
            ))}
        </div>
    );
}

export default bbsCardList;