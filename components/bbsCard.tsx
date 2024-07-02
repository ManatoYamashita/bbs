import { BBSData } from '@/app/types/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface BBSDataProps {
    bbsData: BBSData;
}

const bbsCard = ({ bbsData }: BBSDataProps) => {

    const { id, title, content, createdAt, username } = bbsData;

    return (
        <Card>
            <CardHeader>
            <CardTitle>{ title }</CardTitle>
            <CardDescription>{ username }</CardDescription>
            </CardHeader>
            <CardContent>
                { content }
            </CardContent>
            <CardFooter className="flex justify-between">
            <Link className='text-blue-500' href={`bbs-posts/${id}`}>Read more</Link>
            </CardFooter>
        </Card>
    );
}

export default bbsCard;