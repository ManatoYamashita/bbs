import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const bbsCard = () => {
    return (
        <Card>
            <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, tenetur. Laborum in vel optio voluptatum, error sapiente corrupti cum veritatis, dolores deserunt autem cumque tempore ducimus eaque. Quis, tenetur eveniet!
            </CardContent>
            <CardFooter className="flex justify-between">
            <Link className='text-blue-500' href={"/bbs-posts/1"}>Read more</Link>
            </CardFooter>
        </Card>
    );
}

export default bbsCard;