import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

// もし開発環境であれば、prisma インスタンスをグローバル変数に保存
// これにより、次回のリクエストで再利用できるため、hot-reloading が高速化される
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma