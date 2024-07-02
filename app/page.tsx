import { PrismaClient } from '@prisma/client';
import BbsCardList from '@/components/bbsCardList';
import { BBSData } from './types/types';


async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
     cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();
  // console.log(bbsAllData);

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData: BBSData[] = await getBBSAllData();

  return (
    <main>
      <BbsCardList bbsAllData={bbsAllData} />
    </main>
  );
}
