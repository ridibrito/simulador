-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "image" TEXT,
    "cotacaoId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cotacao" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "estadosId" INTEGER NOT NULL,
    "tipoProdutoId" INTEGER NOT NULL,
    "tipoPlanoId" INTEGER NOT NULL,
    "operadoraId" INTEGER NOT NULL,
    "administradoraId" INTEGER NOT NULL,

    CONSTRAINT "Cotacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estados" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoProduto" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "TipoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoPlano" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "TipoPlano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administradora" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "image" TEXT,
    "cotacaoId" INTEGER NOT NULL,
    "entidadeId" INTEGER NOT NULL,
    "profissaoId" INTEGER NOT NULL,

    CONSTRAINT "Administradora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operadora" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "image" TEXT,
    "cotacaoId" INTEGER NOT NULL,

    CONSTRAINT "Operadora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entidade" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Entidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissao" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Profissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acomodacao" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Acomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abrangencia" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Abrangencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coparticipacao" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Coparticipacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reembolso" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Reembolso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "administradoraId" INTEGER NOT NULL,
    "operadoraId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdministradoraToEntidade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AdministradoraToOperadora" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AdministradoraToProfissao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EntidadeToProfissao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AdministradoraToEntidade_AB_unique" ON "_AdministradoraToEntidade"("A", "B");

-- CreateIndex
CREATE INDEX "_AdministradoraToEntidade_B_index" ON "_AdministradoraToEntidade"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdministradoraToOperadora_AB_unique" ON "_AdministradoraToOperadora"("A", "B");

-- CreateIndex
CREATE INDEX "_AdministradoraToOperadora_B_index" ON "_AdministradoraToOperadora"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdministradoraToProfissao_AB_unique" ON "_AdministradoraToProfissao"("A", "B");

-- CreateIndex
CREATE INDEX "_AdministradoraToProfissao_B_index" ON "_AdministradoraToProfissao"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EntidadeToProfissao_AB_unique" ON "_EntidadeToProfissao"("A", "B");

-- CreateIndex
CREATE INDEX "_EntidadeToProfissao_B_index" ON "_EntidadeToProfissao"("B");

-- AddForeignKey
ALTER TABLE "Cotacao" ADD CONSTRAINT "Cotacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotacao" ADD CONSTRAINT "Cotacao_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotacao" ADD CONSTRAINT "Cotacao_tipoProdutoId_fkey" FOREIGN KEY ("tipoProdutoId") REFERENCES "TipoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotacao" ADD CONSTRAINT "Cotacao_tipoPlanoId_fkey" FOREIGN KEY ("tipoPlanoId") REFERENCES "TipoPlano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotacao" ADD CONSTRAINT "Cotacao_operadoraId_fkey" FOREIGN KEY ("operadoraId") REFERENCES "Operadora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotacao" ADD CONSTRAINT "Cotacao_administradoraId_fkey" FOREIGN KEY ("administradoraId") REFERENCES "Administradora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plano" ADD CONSTRAINT "Plano_administradoraId_fkey" FOREIGN KEY ("administradoraId") REFERENCES "Administradora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plano" ADD CONSTRAINT "Plano_operadoraId_fkey" FOREIGN KEY ("operadoraId") REFERENCES "Operadora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdministradoraToEntidade" ADD CONSTRAINT "_AdministradoraToEntidade_A_fkey" FOREIGN KEY ("A") REFERENCES "Administradora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdministradoraToEntidade" ADD CONSTRAINT "_AdministradoraToEntidade_B_fkey" FOREIGN KEY ("B") REFERENCES "Entidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdministradoraToOperadora" ADD CONSTRAINT "_AdministradoraToOperadora_A_fkey" FOREIGN KEY ("A") REFERENCES "Administradora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdministradoraToOperadora" ADD CONSTRAINT "_AdministradoraToOperadora_B_fkey" FOREIGN KEY ("B") REFERENCES "Operadora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdministradoraToProfissao" ADD CONSTRAINT "_AdministradoraToProfissao_A_fkey" FOREIGN KEY ("A") REFERENCES "Administradora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdministradoraToProfissao" ADD CONSTRAINT "_AdministradoraToProfissao_B_fkey" FOREIGN KEY ("B") REFERENCES "Profissao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntidadeToProfissao" ADD CONSTRAINT "_EntidadeToProfissao_A_fkey" FOREIGN KEY ("A") REFERENCES "Entidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntidadeToProfissao" ADD CONSTRAINT "_EntidadeToProfissao_B_fkey" FOREIGN KEY ("B") REFERENCES "Profissao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
