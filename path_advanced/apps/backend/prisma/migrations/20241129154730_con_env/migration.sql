-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "imagemBackground" TEXT NOT NULL,
    "publicoEsperado" INTEGER NOT NULL,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convidados" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL,
    "possuiAcompanhantes" BOOLEAN NOT NULL,
    "qtdeAcompanhantes" INTEGER NOT NULL,
    "eventoId" TEXT,

    CONSTRAINT "convidados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "eventos_alias_key" ON "eventos"("alias");

-- AddForeignKey
ALTER TABLE "convidados" ADD CONSTRAINT "convidados_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos"("id") ON DELETE SET NULL ON UPDATE CASCADE;