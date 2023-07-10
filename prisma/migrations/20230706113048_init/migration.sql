-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(128) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "cpf" INTEGER NOT NULL,
    "senha" VARCHAR(64) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opinions" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Opinions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_cpf_key" ON "Users"("cpf");

-- AddForeignKey
ALTER TABLE "Opinions" ADD CONSTRAINT "Opinions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
